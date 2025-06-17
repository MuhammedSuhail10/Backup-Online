
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Link from 'next/link';

export default function Social() {
    return (
        <>
            <Link href="https://www.instagram.com/backuponline.in?igsh=ZXJmbmxmemJuYzhl">
                <InstagramIcon fontSize='large' />
            </Link>
            <Link href="https://wa.me/919497428107?text=Hi%20there!%20I%27d%20love%20to%20know%20more%20about%20the%20courses%20from%20IGNOU.%20Looking%20forward%20to%20join." target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon fontSize='large' />
            </Link>
            <Link href="mailto:backup.inonline@gmail.com" target="_blank" rel="noopener noreferrer">
                <MailOutlineIcon fontSize='large' />
            </Link>
            <Link href="tel:+919497428107">
                <PhoneOutlinedIcon fontSize='large' />
            </Link>
        </>
    )
}