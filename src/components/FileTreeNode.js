'use strict';
import React from "react";
import FileTree from "./FileTree";
import PropTypes from "prop-types";

export default class FileTreeNode extends React.Component {
    static propTypes = {
        selected: PropTypes.any,
        onSelect: PropTypes.func.isRequired,
        data: PropTypes.any.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            collapsed: true,
            selected: false
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.selected === null || (this.state.selected && newProps.selected.name !== this.state.data.name)) {
            this.setState({
                selected: false
            })
        }
    }

    select(e) {
        e.stopPropagation();
        e.preventDefault();
        this.setState({
            selected: !this.state.selected
        });
        this.props.onSelect(this.state.data);
    }

    toggle(e) {
        e.stopPropagation();
        e.preventDefault();
        this.setState({
            collapsed: !this.state.collapsed
        });
        return false;
    };

    renderChildren(children) {
        if (!this.state.collapsed && children && children.length > 0) {
            return <FileTree {...this.props} key={this.state.data.name} data={children}/>
        }
    }

    render() {
        const {data, selected, collapsed} = this.state;
        return (
            <li onClick={this.select.bind(this)}>
                <div className={`file-element ${selected ? "selected" : ""}`}>
                    <div className="val">
                        {
                            (data.type === "file" || !data.children || data.children.length === 0) ? <span /> :
                                <span onClick={this.toggle.bind(this)}
                                      className={`${collapsed ? "collapsed" : "open"} `}/>
                        }
                        <span className={`${data.type}`}/>
                        {data.name}
                    </div>
                </div>
                {this.renderChildren(data.children)}
            </li>
        )
    }
}

