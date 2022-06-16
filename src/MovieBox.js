import {Modal, show, Button} from 'react-bootstrap';
import React, {useState} from 'react';
const API_IMG="https://image.tmdb.org/t/p/w500/"


const MovieBox = ({title, poster_path, vote_average, release_date, overview})=>{
    
    const [show, setShow]=useState(false);
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
   
    return (
      <div className="card text-center border-success bg-white mb-3">
          
          <div className="card-body">
          <img className="card-img-top" src={API_IMG + poster_path}/> 
          <div className="card-body">
                  <button type="button" className="btn btn-success"  onClick={handleShow} >Details</button>
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                       
                      </Modal.Header>
                      <Modal.Body>
                      
                      <div class="row">
                        <div class="col-sm-6"><img className="card-img-top" style={{width:'15rem'}}src={API_IMG+poster_path}/>
                        </div>
                        <div class="col-sm-6"> 
                        <h5> Title: {title}</h5>
                        <h5>Release date: {release_date}</h5>
                        <h5>Vote average: {vote_average}</h5>
                        </div>                     
                    </div>
                    <br></br>
                        <p>{overview}</p>
                        
                      
                      
                    
                      
                      </Modal.Body>
                     
                  </Modal>
              </div>
            </div>
        </div>
    )
  }
  
  export default MovieBox;
   