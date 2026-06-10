import { component$ } from "@builder.io/qwik";
import {useForm} from '@modular-forms/qwik';
import { ContactFormDataType } from "../../types/contact.state";
import './contactFormSection.scss';
const ContactFormSection = component$(() => {

    const [contactForm, { Form, Field }] = useForm<ContactFormDataType>({
        loader: {
            value: {
                name: "",
                email: "",
                inquiry: "reservation",
                message: ""
            }
        }
    });

     

    const inquiryOptions = [
        { value: "reservation", label: "Reservation Inquiry" },
        { value: "private", label: "Private Event" },
        { value: "feedback", label: "Dining Feedback" },
        { value: "press", label: "Press & Media" },
        { value: "other", label: "Other" }
    ];

    return (
        <div class="contact__form-section">
            <h2>Send a message</h2>
            <p>Our concierge team responds within 24 hours</p>
            
            <Form class="form">
                <Field name="name" type="string">
                    {
                        (field, props) => (
                            <div class="form__group">
                                <input {...props} type="text" value={field.value} />
                                <label for={field.name}>Full Name</label>
                            </div>
                        )
                    }
                </Field>
                <Field name="email" type="string">
                    {
                        (field, props) => (
                            <div class="form__group">
                                <input {...props} type="email" value={field.value} />
                                <label for={field.name}>Email Address</label>
                            </div>
                        )
                    }
                </Field>
                <Field name="inquiry" type="string">
                    {
                        (field, props) => (
                            <div class="form__group">
                                <select {...props}>
                                    {
                                        inquiryOptions.map(({label, value}) => (
                                            <option key={value} value={value} selected={field.value === value}>{label}</option>
                                        ))
                                    }
                                </select>
                                <label for={field.name}>Inquiry Type</label>
                            </div>
                        )
                    }
                </Field>
                <Field name="message" type="string">
                    {
                        (field, props) => (
                            <div class="form__group">
                                <textarea {...props} value={field.value}></textarea>
                                <label for={field.value}>Your message</label>
                            </div>
                        )
                    }
                </Field>
                <button class="submit-btn" type="submit">Send Message</button>
            </Form>

        </div>
    )
});

export default ContactFormSection;