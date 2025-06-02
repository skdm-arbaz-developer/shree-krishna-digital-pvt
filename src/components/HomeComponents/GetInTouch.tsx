import { Button } from "antd";
import { BsArrowRight } from "react-icons/bs";

export default function GetInTouch() {
  return (
    <div className="get-in-touch-section py-20">
      <div className="container mx-auto px-0 sm:px-5 xl:px-0">
        <div className="get-in-touch lg:flex justify-between items-center">
          <h2 className="text-2xl">Looking to grow and scale your business?</h2>
          <div className="get-input mt-10 lg:mt-0">
            <input placeholder="Get in touch with us" />
            <Button>
              <BsArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
