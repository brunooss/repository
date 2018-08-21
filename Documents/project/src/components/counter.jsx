import React from 'react';

export default class Counter extends React.Component {
    state = { 
        count: 0,
        tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"],
        keyValue: ["+", "-"],
        clicked: ""
    }

    handleClick = (e) => {
        this.setState({ clicked: e.target.value});
    }

    renderTags() {
        if (this.state.tags.length != 0) {
            return (
                <ul>
                    <span className={ this.getBadgeClasses() }>{ this.state.clicked.toLocaleUpperCase() }</span>
                    {
                        this.state.tags.map(tag => <button className="btn btn-secondary btn-sm m-2" onClick={(e) => this.handleClick(e)} value={tag}>{ tag }</button> )
                    } 
                </ul>
            );
        } else return <p>No tags!</p>;
    }

    render() { 
        return (
            <React.Fragment>
                { this.renderTags() }
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count == 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count == 0 ? "Zero" : count;
    }
}