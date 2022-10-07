import React from 'react';

const Doctors = (props) => {
    const {email,name,img,specialty} = props.doctors;

    // https://img.lovepik.com/photo/40154/1963.jpg_wh860.jpg , 
    /* 
                <img src="https://wehco.media.clients.ellingtoncms.com/img/photos/2018/06/16/resized_272427-b-free-dental-day-0617_5-24745_t800.JPG?90232451fbcadccc64a17de7521d859a8f88077d" class="w-full" />
                <img src="https://www.eastbaytimes.com/wp-content/uploads/2021/07/EBT-L-DENTALWHEEL-6_86074778.jpg?w=747" class="w-full" />
                <img src="https://thumbs.dreamstime.com/b/dental-exam-11099545.jpg" class="w-full" />
    
    */
    return (
        <> 
        
        <h2 class="text-2xl text-primary text-center">Our Gallery</h2> <br />
        
        
        
        
         <div class="card   bg-base-100 shadow-xl">
            
            <h2 class="text-2xl text-primary text-center">Our Doctors</h2> <br />
            <figure>
                <div class="w-24 mask mask-squircle">
                    <img src={img} />
                </div>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <h3 class="card-title"><span>Specialist In : {specialty} </span></h3>
                <h4>Contact: {email}</h4>
                <h5>For Any Service Book Appointment</h5>
                
                <p></p>
                
            </div>
        </div>
        </>
       
    );
};

export default Doctors;