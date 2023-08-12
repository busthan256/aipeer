import { CompanionForm } from "@/app/(root)/(routes)/companion/[companionId]/components/companion-form";
import prismadb from "@/lib/prismadb";

interface CompanionPageProps{
    params: {
        companionId:  string;
    }
}


const CompanionPage = async ({
    params
}: CompanionPageProps) => {
    //TODO subscription

    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.companionId,
        }
    });

    const categories = await prismadb.category.findMany();


    return (
        <CompanionForm 
        initialData={companion}
        categories={categories}
        />
    )
}

export default CompanionPage;