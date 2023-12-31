import { useState } from "react";
import FeaturesCard from "../components/FeaturesCard";
import NavHeader from "../components/NavHeader";
import NavHeaderLeft from "../components/NavHeaderLeft";
import { MainProps, ProductRequestsProps } from "../App";
import AddFeedbackModal from "../components/productcard/AddFeedbackModal";
import { useNavigate } from "react-router-dom";

interface HomeProps {
  productData: MainProps;
  filteredData: ProductRequestsProps[];
  setProductData: (value: MainProps) => void;
  handleCounter: (value: number) => void;
  createNewFeedback: () => void;
  titleInput: string;
  categoryInput: string;
  inputDescription: string;
  setInputDescription: (value: string) => void;
  setTitleInput: (value: string) => void;
  setCategoryInput: (value: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  liveProductData: ProductRequestsProps[];
  plannedData: ProductRequestsProps[];
  inProgressData: ProductRequestsProps[];
  handleSortNav: (value: string) => void;
  handleSort: (value: string) => void;
}

export default function Home(props: HomeProps) {
  const {
    filteredData,
    productData,
    setProductData,
    handleCounter,
    createNewFeedback,
    categoryInput,
    inputDescription,
    titleInput,
    setCategoryInput,
    setInputDescription,
    setTitleInput,
    isModalOpen,
    setIsModalOpen,
    inProgressData,
    liveProductData,
    plannedData,
    handleSortNav,
    handleSort,
  } = props;
  const navigate = useNavigate();
  return (
    <section className="max-w-[1100px] gap-x-[20px]  mx-auto py-32 flex">
      <NavHeaderLeft
        handleSortNav={handleSortNav}
        plannedData={plannedData}
        inProgressData={inProgressData}
        liveProductData={liveProductData}
        productData={productData}
      />

      <div className="max-w-[855px] mx-auto  w-full">
        {isModalOpen && (
          <AddFeedbackModal
            setInputDescription={setInputDescription}
            setTitleInput={setTitleInput}
            setCategoryInput={setCategoryInput}
            titleInput={titleInput}
            categoryInput={categoryInput}
            inputDescription={inputDescription}
            createNewFeedback={createNewFeedback}
            setIsModalOpen={setIsModalOpen}
          />
        )}

        <NavHeader
          handleSort={handleSort}
          setIsModalOpen={setIsModalOpen}
          setProductData={setProductData}
          productData={productData}
        />
        <div className="space-y-5 mt-5">
          {filteredData?.map((data) => {
            return (
              <FeaturesCard
                handleCounter={handleCounter}
                key={data.id}
                {...data}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
