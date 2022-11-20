import React from 'react';

const ContactUs = () => {
    return (
        <div className=" flex justify-center ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">

                        <input type="text" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Subject" className="input input-bordered" />
                    </div>
                    <div>
                        <textarea className="textarea textarea-success" placeholder="Textarea"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Submit" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;