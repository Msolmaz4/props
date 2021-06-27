import React from 'react';


class Collapse extends React.Component {

    constructor() {
        super();
        this.state = {
            showContent: false
        }
     
    
    }
    showMore = () => {
        this.setState({showContent:!this.state.showContent})
    }

    componentDidMount(){

        console.log('component olusturldu')
    }

componentDidUpdate(){
    console.log('olusturukld')
}

    render() {
        return (
            <div>

                <button className="btn btn-primary w-100" onClick={this.showMore} >
                    Link with href
                    {React.Children.map(this.props.children, children=>children.props.cardTitle)}
                </button>
                {
                    this.state.showContent ? (
                        <div className="collapse show">
                            {React.Children.map(this.props.children, children=>children)}

                        </div>
                    ) : null
                }






            </div>

        );
    }
};
export default Collapse;