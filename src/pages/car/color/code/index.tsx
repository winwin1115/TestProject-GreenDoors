import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import Image from "next/image";

import ButtonBase from "../../../../components/Button/Button";
import BackButton from "../../../../components/Button/ButtonIcon";
import BackArrow from "../../../../assets/SVGs/backarrow.svg";
import LayoutMain from "../../../../layout/main/index";
import { NextPageWithLayout } from "../../../_app";
import Link from "next/link";
import { updateCarState } from "../../../../reducers/account.reducer";
import { AppDispatch } from "../../../../hooks";

const Code: NextPageWithLayout = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const dispatch = AppDispatch();

  const handleConfirm = () => {
    dispatch(
      updateCarState({
        code: code,
      })
    );
  };
  return (
    <>
      <div className="border border-color-wallet rounded-lg pl-5 py-10 pr-[22px] mb-20 sm:p-10 sm:w-full">
        <h2 className="text-2xl font-bold font-inter mb-11 select-none">
          ENTER CODE
        </h2>
        <div className="w-full bg-border-color-token h-px mb-[30px]"></div>

        <div className="mt-[30px]">
          <label className="block tracking-wide text-grey-darker text-base font-bold mb-2.5">
            CODE
          </label>
          <input
            className="appearance-none block w-full h-[48px] bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-2.5"
            id="grid-first-name"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <Link href="/car/color/code/generate">
            <ButtonBase
              label="DONE"
              primary
              onClick={handleConfirm}
              disabled={code ? false : true}
            />
          </Link>
        </div>
      </div>

      <BackButton
        label="Back"
        leftElementIcon={<Image src={BackArrow} alt="Back" />}
        className="mt-[30px] mb-44"
        onClick={() => {
          router.back();
        }}
      ></BackButton>
    </>
  );
};

Code.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain>{page}</LayoutMain>;
};

export default Code;
