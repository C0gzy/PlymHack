import { Globe , Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function SocialBar({ linkedin, github, email, website }) {
    const socialLinks = []

    if (linkedin) {
        socialLinks.push(
            <Link key="linkedin" href={linkedin} className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
            </Link>
        )
    }

    if (github) {
        socialLinks.push(
            <Link key="github" href={github} className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
            </Link>
        )
    }

    if (email) {
        socialLinks.push(
            <Link key="email" href={`mailto:${email}`} className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
            </Link>
        )
    }

    if (website) {
        socialLinks.push(
            <Link key="website" href={website} className="text-muted-foreground hover:text-primary">
                <Globe className="h-5 w-5" />
            </Link>
        )
    }

    return <div className="flex gap-2">{socialLinks}</div>
}