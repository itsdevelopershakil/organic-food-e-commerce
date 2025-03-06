import { CiLocationOn } from 'react-icons/ci';
import { FiPhoneCall } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';
import Breadcrumbs from '../components/Breadcrumbs';

const Contact = () => {
    return (
        <div>
            <Breadcrumbs />
            <div className="max-width">
                <div>
                    <div>
                        <CiLocationOn />
                        <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                    </div>
                    <div>
                        <TfiEmail />
                        <p>Proxy@gmail.com</p>
                        <p> Help.proxy@gmail.com</p>
                    </div>
                    <div>
                        <FiPhoneCall />
                        <p>(219) 555-0114</p>
                        <p>(164) 333-0487</p>
                    </div>
                </div>

                <div>
                    <h3>Just Say Hello!</h3>
                    <p>
                        Do you fancy saying hi to me or you want to get started
                        with your project and you need my help? Feel free to
                        contact me.
                    </p>
                    <form>
                        <input type="text" placeholder="Template Cookie" />
                        <input type="text" placeholder="zakirsoft@gmail.com" />
                        <input type="text" placeholder="Text here" />
                        <textarea
                            name=""
                            id=""
                            placeholder="Subjects"
                        ></textarea>
                    </form>
                    <button>Send Message</button>
                </div>
            </div>
            <div className="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28952.284565373327!2d91.88239429601404!3d24.896768280998998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751ab31f9e7402d%3A0x696fd9e265716114!2sRose%20View%20Hotel!5e0!3m2!1sen!2sbd!4v1741281610241!5m2!1sen!2sbd"
                    height={450}
                    className="w-full"
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
