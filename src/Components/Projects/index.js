import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'
import { faCss3, faHtml5, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import tailwind from '../../assets/images/Tailwind.png'
import ts from '../../assets/images/TypeScript.jpg'
import appwrite from '../../assets/images/Appwrite.png'
import flask from '../../assets/images/Flask.png'
import express from '../../assets/images/Express.png'
import mongo from '../../assets/images/Mongo.png'
import Thq from '../../assets/images/TopperHQ.jpg'
import SHub from '../../assets/images/SahaytaHub.jpg'
import BS from '../../assets/images/BlindSpot.jpg'

const Project = () =>{
    return(
        <>
        <div className='main-project-page'>
            <div className="container">
                <div className="box">
                <div className='container2'>
                        <div className='box1'>
                        <FontAwesomeIcon className="icon" icon={faReact} color='#47b9da'></FontAwesomeIcon>
                        </div>
                        <div className='box1'>
                            <img className='icon' src={tailwind} alt='tailwindcss'></img>
                        </div>
                        <div className='box1'>
                            <img className='icon' src={ts} alt='typescript'></img>
                        </div>
                        <div className='box1'>
                        <img className='icon' src={appwrite} alt='typescript'></img>
                        </div>
                </div>
                    <h1>UnityNet</h1>
                    <p>A social media responsive WebApp made using modern Technology offers all CRUD features</p>
                </div>
                <div className="box">
                <img src={Thq} className='titleimg' alt='Titleimg'></img>
                <div className='container2'>
                        <div className='box1'>
                        <FontAwesomeIcon className="icon" icon={faHtml5} color='#dc4a25'></FontAwesomeIcon>
                        </div>
                        <div className='box1'>
                        <FontAwesomeIcon className="icon" icon={faCss3} color='#47b9da'></FontAwesomeIcon>
                        </div>
                        <div className='box1'>
                            <img className='icon' src={flask} alt='typescript'></img>
                        </div>
                        <div className='box1'>
                        <FontAwesomeIcon className="icon" icon={faPython} color='#47b9da'></FontAwesomeIcon>
                        </div>
                </div>
                    <h1>TopperHQ</h1>
                    <p>A website which displays all important QnA from each chapter of every subject in a summarised and easy to remember format.</p>
                </div>
                <div className="box">
                <img src={SHub} className='titleimg' alt='Titleimg'></img>
                <div className='container2'>
                        <div className='box1'>
                        <FontAwesomeIcon className="icon" icon={faHtml5} color='#dc4a25'></FontAwesomeIcon>
                        </div>
                        <div className='box1'>
                        <FontAwesomeIcon className="icon" icon={faCss3} color='#47b9da'></FontAwesomeIcon>
                        </div>
                        <div className='box1'>
                        <FontAwesomeIcon className="icon" icon={faJsSquare} color='#ebd418'></FontAwesomeIcon>
                        </div>
                </div>
                    <h1>SahaytaHUB</h1>
                    <p>A Website to get donation or investment being a NGO or any Private Firm build at IIIT Hackathon</p>
                </div>
                <div className="box">
                <img src={BS} className='titleimg' alt='Titleimg'></img>
                <div className='container2'>
                        <div className='box1'>
                        <FontAwesomeIcon className="icon" icon={faReact} color='#47b9da'></FontAwesomeIcon>
                        </div>
                        <div className='box1'>
                        <FontAwesomeIcon className="icon" icon={faNodeJs} color='#509840'></FontAwesomeIcon>
                        </div>
                        <div className='box1'>
                        <img className='icon' src={express} alt='typescript'></img>
                        </div>
                        <div className='box1'>
                        <img className='icon' src={mongo} alt='typescript'></img>
                        </div>
                </div>
                    <h1>Blind Spot</h1>
                    <p>Addresses the critical need for comprehensive support for individuals with disabilities, particularly those who are blind, deaf, or have other physical challenges.</p>
                </div>
            </div>
        </div>
        </>

    );
}

export default Project