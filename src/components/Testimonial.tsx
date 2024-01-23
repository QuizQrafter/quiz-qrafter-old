type TestimonialProps = {
    quote: string;
    author: string;
    title: string;
  };
  
  const Testimonial = ({ quote, author, title }: TestimonialProps) => {
    return (
      <div className="max-w-sm p-4 bg-gray-100 rounded shadow">
        <p className="text-md mb-4">{quote}</p>
        <div className="text-right">
          <p className="font-bold">{author}</p>
          <p className="text-sm">{title}</p>
        </div>
      </div>
    );
  };
  
  export default Testimonial;
  