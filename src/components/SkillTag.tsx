
const TechTag = ({ tag }: { tag: string }) => {
  // Simple hashing function to get a consistent color for a tag
  const getColor = (tagName: string) => {
    let hash = 0;
    for (let i = 0; i < tagName.length; i++) {
      hash = tagName.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colors = [
      "bg-red-100 text-red-800", 
      "bg-yellow-100 text-yellow-800", 
      "bg-green-100 text-green-800",
      "bg-blue-100 text-blue-800", 
      "bg-indigo-100 text-indigo-800", 
      "bg-purple-100 text-purple-800",
      "bg-pink-100 text-pink-800", 
      "bg-sky-100 text-sky-800", 
      "bg-teal-100 text-teal-800",
    ];
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full ${getColor(tag)}`}>
      {tag}
    </span>
  );
};

export default TechTag;
