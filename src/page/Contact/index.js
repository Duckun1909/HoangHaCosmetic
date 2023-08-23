import PageTitle from "~/components/PageTitle";
import Information from "./Information";
import SendMessage from "./SendMessage";

function Contact() {
    return ( 
        <div>
            <PageTitle currentPage="contact" />
            <Information />
            <SendMessage />
        </div>
    );
}

export default Contact;