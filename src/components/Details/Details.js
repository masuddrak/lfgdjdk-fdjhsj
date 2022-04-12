import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Details.css'
const Details = ({ photo }) => {
    const { tk,img,name,live } = photo
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    return (
        <div className='text-center'>
            {values.map((v, idx) => (
                <Button key={idx} className="buttons" onClick={() => handleShow(v)}>
                    <img src={img} alt="" />
                    <h5 className='text-dark mb-0'>{name}</h5>
                    <p className='text-dark '>Gulisthan,{live}</p>
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>{photo.name}</Modal.Title> */}
                </Modal.Header>
                <Modal.Body className='details-container'>
                    <img className='details-img' src={photo.img} alt="" />
                    <div className='details-info'>
                        <h4 className='home-title'>Name:{photo.name}</h4>
                        <p className='home-title my-3 fw-bold'>Location:{photo.live}</p>
                        <p className='home-title my-3 fw-bold'>Age:{photo.age}Years</p>
                        <hr />
                        <div>
                            <div className='hours-items'>
                                <h3>Currency:</h3>
                                <h3>TK</h3>
                            </div>
                            <hr />
                            <div className='hours-items'>
                                <h3>2 Hurs</h3>
                                <h3>Price:{tk}TK</h3>
                            </div>
                            <div className='hours-items'>
                                <h3>5 Hurs</h3>
                                <h3>Price:{tk * 2}TK</h3>
                            </div>
                            <div className='hours-items'>
                                <h3>Full Night</h3>
                                <h3>Price:{tk * 3}TK</h3>
                            </div>
                            <hr />
                            <h4>Contact Info</h4>
                            <hr />
                            <div>
                                <div className='hours-items'>
                                    <h3>Phone <span className='text-warning fs-6'>(call only)</span></h3>
                                    <h3>+880 0171431392</h3>
                                </div>
                                <div className='hours-items'>
                                    <h3>Website:</h3>
                                    <a href="">http://localhost:3000/best</a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <p className='text-muted'><span className='fw-bold fs-3'>About Me:</span> {photo.title}</p>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Details;