import * as C from './style'
import { Link } from 'react-router-dom'
import '../../../style.css'

type Props = {
    title: string
    description: string
    icon: string
    path: string
    active: boolean
}

export const SideBar = ({ title, description, icon, path, active }: Props) => {
    return(
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'profile' && <div className='profile-icon'/>} 
                    {icon === 'book' && <div className='book-icon'/>}
                    {icon === 'mail' && <div className='mail-icon'/>}
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    )
}