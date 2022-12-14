import React from "react";
import { Link } from "react-router-dom";
import * as C from './styles'
import {ReactComponent as ProfileIcon} from '../../svg/profile.svg'
import {ReactComponent as BookIcon} from '../../svg/book.svg'
import {ReactComponent as MailIcon} from '../../svg/mail.svg'
import {ReactComponent as CheckIcon} from '../../svg/check.svg'

type Props = {
    title:string
    description:string
    icon:string
    path:string
    active:boolean
}

export const SidebarItem = ({title, description, icon, path, active}:Props) => {
    return (    
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'profile' &&
                        <ProfileIcon fill="#fff" width={24} height={24}/>
                    }
                    {icon === 'book' &&
                        <BookIcon fill="#fff" width={24} height={24}/>
                    }
                    {icon === 'mail' &&
                        <MailIcon fill="#fff" width={24} height={24}/>
                    }
                    {icon === 'check' &&
                        <CheckIcon fill="#fff" width={24} height={24}/>
                    }
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    )
}