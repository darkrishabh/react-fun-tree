import React from "react";
import FileTreeNode from "./FileTreeNode";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import data from "../mock-data/data";
export default class Modal extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: null
        }
    }
    onSelect = (selected) => {
        this.setState({selected});
    };
    renderFooter() {
        if (this.state.selected) {
            return (
                <ModalFooter item={this.state.selected}
                             buttonText="Done"
                             linkText="Link"
                             actions={{buttonOnClick: () => this.onSelect(null)}}/>
            )
        }
    }
    render() {
        const {selected} = this.state;
        return (
            <div className="modal">
                <ModalHeader title="Title"/>
                <div id="modalContainer">
                    <div id="label">
                        <span className="mute">
                            Label
                        </span>
                    </div>
                    <div className="content">
                        <ul>
                            {
                                data.map((element, idx) =>
                                    <FileTreeNode selected={selected}
                                                  onSelect={this.onSelect}
                                                  key={`${element.name}_${idx}`}
                                                  data={element}/>)
                            }
                        </ul>
                    </div>
                </div>
                {this.renderFooter()}
            </div>
        )
    }
}