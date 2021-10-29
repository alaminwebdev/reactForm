import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class ControlForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            select:"coconut",
            description: "",
            checkbox:true
        }

        //bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event =>{
        const name = event.target.name;
        const value = event.target.value && event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        //console.log(name,value);
        this.setState({
            [name]:value
        })
    }
    handleSubmit = event =>{
        console.log(this.state)
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center py-5">Control Form</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Write Your Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label >Email</Label>
                        <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label >Password</Label>
                        <Input type="password" name="password" value={this.state.password}  onChange={this.handleChange} placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label >Select</Label>
                        <Input type="select" name="select" value={this.state.select}  onChange={this.handleChange} >
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label >Description</Label>
                        <Input type="textarea" name="description" value={this.state.description} onChange={this.handleChange} />
                    </FormGroup>
                    {/* <FormGroup className="py-3">
                        <Label>File</Label>
                        <Input type="file" name="file" value="" />
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </FormGroup> */}
                    {/* <FormGroup tag="fieldset">
                        <legend>Radio Buttons</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radiobutton" />
                                Option one is this and that—be sure to include why it's great
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radiobutton" />
                                Option two can be something else and selecting it will deselect option one
                            </Label>
                        </FormGroup>
                    </FormGroup> */}
                    <FormGroup check className="py-3">
                        <Label check>
                            <Input type="checkbox"  name="checkbox" value={this.state.checkbox} onChange={this.handleChange}/>
                            Check me out
                        </Label>
                    </FormGroup>

                    <Button className="my-3" type="submit" value="Submit" >Submit</Button>
                </Form>
            </div>
        )
    }
}
