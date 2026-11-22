import CollectionsClient from "./CollectionsClient";
import { getAdminCollections } from "@/lib/api";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Collections | Gem&Gen Admin",
  description: "Manage product collections and control storefront navigation visibility",
};

export default async function CollectionsPage() {
  const collections = await getAdminCollections();
  return <CollectionsClient initialCollections={collections} />;
}
