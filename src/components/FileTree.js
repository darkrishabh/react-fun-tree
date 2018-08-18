'use strict';
import React from "react";
import FileTreeNode from "./FileTreeNode";
import PropTypes from 'prop-types';

export default class FileTree extends React.Component {
    static propTypes = {
        selected: PropTypes.any,
        onSelect: PropTypes.func.isRequired,
        data: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);
        this.state = props;
    }

    componentWillReceiveProps(newProps) {
        if (JSON.stringify(newProps.selected) !== JSON.stringify(this.state.selected)) {
            this.setState({
                selected: newProps.selected
            })
        }
    }

    render() {
        const {data, onSelect, selected} = this.state;
        return (
            <ul>
                {data.map((element, idx) =>
                    <FileTreeNode selected={selected}
                                  onSelect={onSelect}
                                  key={`${element.name}_${idx}`}
                                  data={element}/>)
                }
            </ul>
        )
    }
}

