
import '../theming/theme.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
function Homepage() {


    return (
        <div className="w-full h-full  bg-bluegray-900 ">
            <div className='bg-teal-50 flex bg-bluegray-900' style={{/*border:'2px solid black',*/ height: "967px"}}>
                <div className='title-left flex justify-content-center' style={{/*border:'2px solid black',*/ width:"50%",height:"100%"}} >
                    <div className='title' >
                     <div style={{width:"628px"}}>
                     <h1 style={{fontSize:"57px"}} className='  text-white text-left'>Multipurpose <span className='text-red-500 '>Car Dealership</span> WordPress Theme</h1>
                     </div>
                        <p className='text-white text-left text-lg white-space-normal mt-4' style={{fontFamily:"revert-layer",lineHeight:2}}>For car dealers, classified listing, auto rental, repair services and motorcycles dealers. Autohive is best car dealership, rental, repair services listing Wordpress theme.</p>
                        <button  className='text-white cursor-pointer white-space-normal mt-4 text-base border-round-3xl bg-red-500  px-4 py-3  border-none'>Live Preview</button>
                    </div>
                </div>

                <div className='' style={{/*border:'2px solid blue',*/width:"54%",height:"100%",marginLeft:"-10px" }} >
                   <div style={{marginTop:"80px"}} className='flex car_img '>
                   <img style={{width:"575px",marginTop:"70px",height:"476px"}} src="https://autohive-wp.themetags.com/demo/assets/img/banner/banner-2.webp" alt="" />
                    <img style={{width:"270px",marginLeft:"-61px",height:"356px"}} src="https://autohive-wp.themetags.com/demo/assets/img/banner/banner-3.webp" alt="" />
                   </div>
                   <div style={{  /* border:" 2px solid yellow",*/marginLeft:"129px",width:"100%",marginTop:"-184px" }} className='car_img1 '>
                   <img style={{marginTop:"1px",height:"502px"}} src="https://autohive-wp.themetags.com/demo/assets/img/banner/banner-1.webp" alt="" />
                   
                   </div>
                </div>

            </div>


            <div className='bg-bluegray-900' style={{ height: "1000px" ,marginTop:"20px"}}>
                <p className='text-7xl font-bold text-center text-white' style={{ fontFamily: 'serif' }}>Recent Projects</p>
                <div className='grid mt-4 flex flex-wrap justify-content-evenly  ' style={{height: "900px" }}>
                    <div className='ml-8 '  style={{ width: "309px", height: "228px" }}>
                        <img src="https://static.wixstatic.com/media/84770f_aa07d1c8f9a143ea816692de386c2569~mv2.jpg/v1/fill/w_305,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg" alt="" />
                        <div>
                            <h4 className='mt-1  text-white text-left'>Urban Loft</h4>
                            <p className='mt-2  text-white text-left'>Double click the dataset icon to add your own content.</p>
                        </div>
                    </div>
                    <div className='ml-8' style={{ width: "309px", height: "228px" }}>
                        <img src="https://static.wixstatic.com/media/84770f_89278740b39b49e7ae19b8fed1834b84~mv2.jpg/v1/fill/w_305,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg" alt="" />
                        <div >
                        <h4 className='mt-1 text-white text-left'>California Style B&B</h4>
                            <p className='mt-2 text-white text-left'>Double click the dataset icon to add your own content.</p>
                        </div>
                    </div>
                    <div className='ml-8 ' style={{ width: "309px", height: "228px" }}>
                        <img src="https://static.wixstatic.com/media/84770f_6b33c6f694474369b951138dc90c5047~mv2.jpg/v1/fill/w_305,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg" alt="" />
                        <div >
                        <h4 className='mt-1 text-white text-left'>Clean Design Apartment</h4>
                            <p className='mt-2 text-white text-left'>Double click the dataset icon to add your own content.</p>
                        </div>
                    </div>
                    <div className='ml-8 ' style={{ width: "309px", height: "228px" }}>
                        <img src="https://static.wixstatic.com/media/84770f_22033d30077548ac9548c81f275b67f7~mv2.jpg/v1/fill/w_305,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg" alt="" />
                        <div >
                        <h4 className='mt-1 text-white text-left'>Midtown Artist Condo</h4>
                            <p className='mt-2 text-white text-left'>Double click the dataset icon to add your own content.</p>
                        </div>
                    </div>  
                    <div  className='ml-8 ' style={{ width: "309px", height: "228px" }}>
                        <img src="https://static.wixstatic.com/media/84770f_59d21b1cc8db4db7b40a75aa8a80b0c2~mv2.jpg/v1/fill/w_305,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg" alt="" />
                        <div >
                        <h4 className='mt-1 text-white text-left'>Classic Family Home</h4>
                            <p className='mt-2 text-white text-left '>Double click the dataset icon to add your own content.</p>
                        </div>
                    </div> 
                     <div  className='ml-8 ' style={{ width: "309px", height: "228px" }}>
                        <img src="https://static.wixstatic.com/media/84770f_41f0e63ff4b5479d98a90f3dbe3852d0~mv2.jpg/v1/fill/w_305,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg" alt="" />
                        <div >
                            <h4 className='mt-1 text-white text-left'>Rustic Cabin</h4>
                            <p className='mt-2 text-white text-left'>Double click the dataset icon to add your own content.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Homepage