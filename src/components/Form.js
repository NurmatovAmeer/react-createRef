import {Component, createRef} from "react"

export class Form extends  Component{

    constructor(props) {
        super(props);
        this.state = {
            card: '',
            cvv:'',
            firstName: '',
            lastName: '',
            email: ''
        };

        this.cardRef = createRef();
        this.cvvRef = createRef();
        this.nameRef = createRef()
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value}, () => {
            if (this.state.card.length === 16) {
                this.cvvRef.current.focus()
            }

            if (this.state.cvv.length === 3){
                this.nameRef.current.focus()
            }

        })
    };


    handleSubmit = (e) => {
        e.preventDefault()
    };

    render() {

        const { card, cvv, firstName, lastName, email } = this.state;

        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3 mt-5">
                        <div className="card">
                            <div className="card-header text-center">
                                <h3>Qatar Bank</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                <div className="form-group form-inline">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="VISA CARD NUMBER"
                                        name="card"
                                        value={card}
                                        onChange={this.handleChange}
                                        ref={this.cardRef}
                                    />
                                    <input
                                        type="number"
                                        className="form-control ml-5"
                                        placeholder="CVV"
                                        name="cvv"
                                        value={cvv}
                                        onChange={this.handleChange}
                                        ref={this.cvvRef}
                                    />
                                </div>
                                    <input
                                        type="text"
                                        className="form-control mt-3"
                                        placeholder="firstName"
                                        name="firstName"
                                        value={firstName}
                                        onChange={this.handleChange}
                                        ref={this.nameRef}
                                    />
                                    <input
                                        type="text"
                                        className="form-control mt-3"
                                        placeholder="lastName"
                                        name="lastName"
                                        value={lastName}
                                        onChange={this.handleChange}
                                    />
                                    <input
                                        type="email"
                                        className="form-control mt-3"
                                        placeholder="email"
                                        name="email"
                                        value={email}
                                        onChange={this.handleChange}
                                    />
                                    <button type="submit" className="btn btn-success btn-block mt-3">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}