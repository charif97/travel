import { redirect } from 'next/navigation';

export default function Home() {
    // Redirect the root URL ("/") to the generated Stitch Landing Page
    redirect('/s_alfred_landing_page_liquid_glass');
}
