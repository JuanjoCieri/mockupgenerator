type DividerText = {
  dividerText: string;
};

export default function Divider({ dividerText }: DividerText) {
  return (
    <>
      <div className="flex justify-start items-center py-4">
        <p className="text-3xl text-white">{dividerText}</p>
      </div>
    </>
  );
}
