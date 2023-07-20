type FeaturesCardProps = {
  featureIcon: any;
  featureTittle: string;
  featureDesc: string;
};

export default function FeaturesCard({
  featureIcon,
  featureTittle,
  featureDesc,
}: FeaturesCardProps) {
  return (
    <div className="flex flex-col gap-4 w-[80%]">
      <div className="w-10 h-10 bg-[#1F1C26] flex items-center justify-center rounded-sm">
        {featureIcon}
      </div>
      <div>
        <p className="text-white text-3xl">{featureTittle}</p>
      </div>
      <div>
        <p className="text-[#989898] text-xl">{featureDesc}</p>
      </div>
    </div>
  );
}
