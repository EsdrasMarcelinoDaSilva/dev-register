import * as C from './style'
import { Header } from '../header'
import { SideBar } from '../sideBar'
import { useForm } from '../../contexts/FormContext'


type Props = {
    children: React.ReactNode
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm()
    return (
        <C.Container>
            <C.Area>
                <Header />
                <C.Steps>
                    <C.Sidebar>
                        <SideBar 
                            title="Personal data"
                            description="Tell us your name, email and phone number"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />
                        <SideBar 
                            title="Professional data"
                            description="Your level"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />
                        <SideBar 
                            title="Contacts data"
                            description="How to find you"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>    
                </C.Steps>    
            </C.Area>    
        </C.Container>    
    )
}