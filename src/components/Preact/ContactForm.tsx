import { useState, useRef } from 'preact/hooks'
import emailjs from "@emailjs/browser"

type StatusType = {
    status: boolean,
    message: string
}

interface ContactFormProps {
    className?: string;
}

const ContactForm = ({ className = "" }: ContactFormProps) => {
    const [mailStatus, setMailStatus] = useState<StatusType>({ status: false, message: "" })
    const [isLoading, setisLoading] = useState<boolean>(false)

    const NameRef = useRef<HTMLInputElement>(null)
    const EmailRef = useRef<HTMLInputElement>(null)
    const MessageRef = useRef<HTMLTextAreaElement>(null)

    const HandleFormSubmit = async (e: SubmitEvent) => {
        e.preventDefault();

        if (!NameRef.current || !EmailRef.current || !MessageRef.current) return

        const name = NameRef.current.value
        const email = EmailRef.current.value
        const message = MessageRef.current.value

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        }

        try {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(email)) throw new Error('🙄 Invalid Email ID!')

            setisLoading(true)

            const mailRes = await emailjs.send(
                "service_qwxcg45",
                "template_kwahd7y",
                templateParams,
                "K2GKR9x5VmEshYwLJ"
            );

            if (mailRes.status !== 200) throw new Error("😵 Message not Sent")

            setMailStatus({ status: true, message: "👍 Message Sent!" })
            setisLoading(false)

            NameRef.current.value = ""
            EmailRef.current.value = ""
            MessageRef.current.value = ""
        } catch (error: { message: string } | any) {
            setMailStatus({ status: false, message: error.message })
        } finally {
            setTimeout(() => {
                setMailStatus({ status: false, message: "" })
            }, 3000);
        }
    }

    return (
        <form
            onSubmit={HandleFormSubmit}
            className={`Fade_Up bg-LinkBtnGradient rounded-md w-full lg:max-w-[650px] px-4 py-2 outline outline-1 outline-white/20 flex_center flex-col ${className}`}
        >
            <label htmlFor="name" className="noCustomCursor w-full flex flex-col px-1 py-2">
                Name
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your Name"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete='name'
                    required
                    ref={NameRef} />
            </label>
            <label htmlFor="email" className="noCustomCursor w-full flex flex-col px-1 py-2">
                Email
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete='email'
                    required
                    ref={EmailRef} />
            </label>
            <label htmlFor="message" className="noCustomCursor w-full flex flex-col px-1 py-2">
                Message
                <textarea
                    rows={5}
                    id="message"
                    name="message"
                    placeholder="Enter your Message"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground resize-none"
                    ref={MessageRef} />
            </label>

            <div className="w-full flex justify-start items-center gap-4">
                <button
                    className="flex_center gap-4 border-none bg-background text-foreground outline outline-1 outline-white/20 my-1 mx-2 py-2 px-6 lg:px-20 rounded-md"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <span>Sending</span>
                            <svg className="lucide lucide-loader-2 animate-spin"  />
                        </>
                    ) : (
                        <>
                            <span>Submit</span>
                            <svg className="lucide lucide-send-horizontal" />
                        </>
                    )}
                </button>
                <span>{mailStatus.message}</span>
            </div>
        </form>
    )
}

export default ContactForm
