import {Component, createRef} from 'react';

export class Submit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visa: '',
            cvv: '',
            email: '',
            password: ''
        };

        this.visaRef = createRef();
        this.cvvRef = createRef();
        this.emailRef = createRef();
    };

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value}, () => {
            if (this.state.visa.length === 16) {
                this.cvvRef.current.focus()
            }

            if (this.state.cvv.length === 3){
                this.emailRef.current.focus()
            }

        })
    };

    newHandleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    };


    handleSubmit = (e) => {

        e.preventDefault();

        const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

        if (this.state.firstName.length >= 6 && this.state.lastName.length >= 6 && regex.test(this.state.email) && this.state.password.length >= 12 ) {
            alert("success")
        }else {
            alert("fail")
        }




    };



    render() {

        const { visa, cvv, email, password} = this.state;
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-4 offset-4 mt-3">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group form-inline">
                                            <input type="number" className="form-control w-75" placeholder="VISA NUMBER" name="visa" value={visa} onChange={this.handleChange} ref={this.visaRef}/>
                                            <input type="number" className="form-control w-25" placeholder="CVV" name="cvv" value={cvv} onChange={this.handleChange} ref={this.cvvRef}/>
                                        </div>
                                        <input type="email" className="form-control" placeholder="email" name="email" value={email} onChange={this.newHandleChange} ref={this.emailRef}/>
                                        <input type="password" className="form-control mt-3" placeholder="password" name="password" value={password} onChange={this.newHandleChange}/>
                                        <button type="submit" className="btn btn-success mt-3 btn-block">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}