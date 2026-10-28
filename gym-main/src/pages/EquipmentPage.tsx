import Layout from "@/components/layout/Layout";
import EquipmentGrid from "@/components/EquipmentGrid";

const EquipmentPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gym Equipment
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover every piece of equipment in your gym. Click on any item to learn exercises, proper form, and targeted muscle groups.
          </p>
        </div>
        
        <EquipmentGrid />
      </div>
    </Layout>
  );
};

export default EquipmentPage;