import React ,{ useState } from 'react';
import { Alert } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function TestBootStrap(props) {

    const {
        buttonLabel,
        className
      } = props

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    return (
       
        

        <div>

        <div>
            <Button color="danger" onClick={toggle}>boton modal</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            </div>
            
            <div className="container">
                <h1>My First Bootstrap Page</h1>
                <p>This part is inside a .container className.</p> 
                <p>The .container className provides a responsive fixed width container.</p>
                <p>Resize the browser window to see that its width (max-width) will change at different breakpoints.</p>
            </div>
            <div className="container">
                <h2>Striped Rows</h2>
                <p>The .table-striped className adds zebra-stripes to a table:</p>            
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                    </tr>
                    <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                    </tr>
                    <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                    </tr>
                </tbody>
                </table>

            </div>

            <div>
                <Alert color="primary">
                    This is a primary alert — check it out!
                </Alert>
                <Alert color="secondary">
                    This is a secondary alert — check it out!
                </Alert>
                <Alert color="success">
                    This is a success alert — check it out!
                </Alert>
                <Alert color="danger">
                    This is a danger alert — check it out!
                </Alert>
                <Alert color="warning">
                    This is a warning alert — check it out!
                </Alert>
                <Alert color="info">
                    This is a info alert — check it out!
                </Alert>
                <Alert color="light">
                    This is a light alert — check it out!
                </Alert>
                <Alert color="dark">
                    This is a dark alert — check it out!
                </Alert>
            </div>
        </div>
    );
}

export default TestBootStrap;