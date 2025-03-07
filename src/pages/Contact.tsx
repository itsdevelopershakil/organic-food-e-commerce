import ContactIcon from '../assets/images/contact/ContactIcon';
import Mail from '../assets/images/contact/Mail';
import MapPin from '../assets/images/contact/MapPin';
import Breadcrumbs from '../components/Breadcrumbs';

const Contact = () => {
    return (
        <div>
            <Breadcrumbs />
            <div className="max-width">
                <div className="flex flex-col-reverse md:flex-row py-20 gap-4 lg:gap-6">
                    <div className="w-full md:w-[240px] lg:w-1/4 shadow-box-lg rounded-lg flex flex-col sm:flex-row md:flex-col">
                        <div className="flex flex-col items-center justify-center sm:px-5 pt-4 sm:py-6 text-center w-full sm:w-1/3 md:w-full shrink-0">
                            <MapPin className="text-[#2C742F] size-8 sm:size-10 lg:size-13" />
                            <p className="text-[#333333] leading-6 py-4 md:w-full">
                                2715 Ash Dr. San Jose, South Dakota 83475
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center sm:px-5 pt-4 sm:py-6 text-center w-full sm:w-1/3 md:w-full shrink-0">
                            <Mail className="text-[#2C742F] size-8 sm:size-10 lg:size-13" />
                            <div className="leding-6 pt-4 sm:py-4 text-[#333333]">
                                <p>Proxy@gmail.com</p>
                                <p>Help.proxy@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center sm:px-5 py-6 text-center w-full sm:w-1/3 md:w-full shrink-0">
                            <ContactIcon className="text-[#2C742F] size-8 sm:size-10 lg:size-13" />
                            <div className="leding-6 pt-4 sm:py-4 text-[#333333]">
                                <p>(219) 555-0114</p>
                                <p>(164) 333-0487</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-3/4 shadow-box-lg rounded-lg p-5 sm:p-10">
                        <h3 className="text-[#1A1A1A] font-semibold text-2xl pt-1">
                            Just Say Hello!
                        </h3>
                        <p className="text-[#808080] text-sm max-w-[486px] pt-2">
                            Do you fancy saying hi to me or you want to get
                            started with your project and you need my help? Feel
                            free to contact me.
                        </p>
                        <form className="pt-6 pb-2 sm:pb-4 space-y-4">
                            <div className="flex-col sm:flex-row  flex gap-4 sm:gap-2">
                                <input
                                    type="text"
                                    placeholder="Template Cookie"
                                    className="border border-[#E6E6E6] w-full sm:w-1/2 outline-primary py-3 text-sm px-4 rounded-md text-[#1a1a1a]"
                                />
                                <input
                                    type="text"
                                    placeholder="zakirsoft@gmail.com"
                                    className="border border-[#E6E6E6] w-full sm:w-1/2 outline-primary py-3 text-sm px-4 rounded-md text-[#1a1a1a]"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Text here"
                                className="border border-[#E6E6E6] w-full outline-primary py-3 text-sm px-4 rounded-md text-[#1a1a1a]"
                            />
                            <textarea
                                name=""
                                id=""
                                placeholder="Subjects"
                                className="border border-[#E6E6E6] w-full outline-primary py-3 text-sm px-4 rounded-md text-[#1a1a1a] h-[100px]"
                            ></textarea>
                        </form>
                        <button className="py-2 md:py-3 px-6 md:px-10 rounded-[43px] cursor-pointer bg-primary text-white text-sm sm:text-base">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28952.284565373327!2d91.88239429601404!3d24.896768280998998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751ab31f9e7402d%3A0x696fd9e265716114!2sRose%20View%20Hotel!5e0!3m2!1sen!2sbd!4v1741281610241!5m2!1sen!2sbd"
                    className="w-full h-[400px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
};

export default Contact;
