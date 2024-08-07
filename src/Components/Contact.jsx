const Contact = () => {
    return (
        <div id="contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
            <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-green-600">Contact Us</h1>
            <form action="" className="flex flex-col gap-2 lg:w-1/2">
                <div className="lg:flex gap-6">
                    <input className="w-full lg:my-4 my-6 rounded-lg bg-slate-800 p-4 border-2 border-green-600 b_glow text-xl text-slate-500" placeholder="Enter Your Name" type="text" />
                    <input className="w-full lg:my-4 my-6 rounded-lg bg-slate-800 p-4 border-2 border-green-600 b_glow text-xl text-slate-500" placeholder="Enter Your Email" type="email" />
                </div>
                <textarea className="w-full my-6 rounded-lg bg-slate-800 p-4 border-2 border-green-600 b_glow text-xl text-slate-500" placeholder="Write Your Message" name="" id="" cols="20" rows="10"></textarea>
                <button className="neno-button shadow-xl hover:shadow-green-600/50 text-white border-2 border-green-600 bg-green-500 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold mb-10" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
