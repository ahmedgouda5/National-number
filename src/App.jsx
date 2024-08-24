import { useState } from "react";
import "./App.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGovernorate, setFilteredGovernorate] = useState(null);
  const [id, setId] = useState("");
  const [birth, setBirth] = useState("");
  const [data] = useState({
    governorates: [
      { code: "01", name: "القاهرة" },
      { code: "02", name: "الإسكندرية" },
      { code: "03", name: "بورسعيد" },
      { code: "04", name: "السويس" },
      { code: "11", name: "دمياط" },
      { code: "12", name: "الدقهلية" },
      { code: "13", name: "الشرقية" },
      { code: "14", name: "القليوبية" },
      { code: "15", name: "كفر الشيخ" },
      { code: "16", name: "الغربية" },
      { code: "17", name: "المنوفية" },
      { code: "18", name: "البحيرة" },
      { code: "19", name: "الإسماعيلية" },
      { code: "21", name: "الجيزة" },
      { code: "22", name: "بني سويف" },
      { code: "23", name: "الفيوم" },
      { code: "24", name: "المنيا" },
      { code: "25", name: "أسيوط" },
      { code: "26", name: "سوهاج" },
      { code: "27", name: "قنا" },
      { code: "28", name: "أسوان" },
      { code: "29", name: "الأقصر" },
      { code: "31", name: "البحر الأحمر" },
      { code: "32", name: "الوادى الجديد" },
      { code: "33", name: "مطروح" },
      { code: "34", name: "شمال سيناء" },
      { code: "35", name: "جنوب سيناء" },
      { code: "88", name: "خارج الجمهورية" },
    ],
  });
  const [info] = useState({
    description: {
      D: {
        day: "",
        month: "",
        year: "",
      },
    },
  });
  const [gender, setGender] = useState("");
  const [showGen, setShowGen] = useState("");

  let idNum = id.toString();
  let dayId = id.slice(6, 7);
  let monthId = id.slice(4, 5);
  let yearId = id.slice(2, 3);
  let { day, month, year } = info.description.D;
  day = dayId;
  month = monthId;
  year = yearId;

  function governorateByCode(e) {
    if (e.target.value.length == 14 || e.target.value.length == 15) {
      setSearchTerm(e.target.value.toString().slice(7, 9));
      setId(e.target.value);
      setGender(e.target.value);
    } else {
      setSearchTerm("");
      setId("");
      setGender("");
    }
  }
  function governorate() {
    const result = data.governorates.find((gover) => gover.code === searchTerm);
    getgover(result);
    if (parseInt(year) === 3) {
      let num = 2000 + parseInt(year);
      console.log(`${day}-${month}-${num}`);
      setBirth(`${day}-${month}-${num}`);
    } else {
      console.log(typeof num);
    }
  }

  function getgover(res) {
    setFilteredGovernorate(res);
    if (gender.length == "14") {
      setShowGen("ذكر");
    } else {
      setShowGen("انثي");
    }
  }

  return (
    <>
      <div className="bg-slate h-screen flex justify-center items-center ">
        <div className="bg-white contain flex flex-col  gap-10   border rounded-lg">
          <div className="p-5">
            <img src="./assets/Group.png" alt="" />
          </div>
          <div>
            <span className="mask2"><img src="./assets/Mask group.svg" alt="" /></span>
            <div className="Know flex justify-center items-center flex-col gap-5">
              <h1 className="blue text-2xl font-bold">!ممكن نتعرف</h1>
              <h5 className="gary">
                من أي رقم قومي مصري هتقدر تعرف شوية تفاصيل بسيطة
              </h5>
            </div>
            <span className="mask2"><img src="./assets/Mask group.svg" alt="" /></span>

          </div>
          <div className=" flex justify-center">
            <div className="search  border rounded-lg py-3 px-4  flex justify-between items-center">
              <button
                onClick={governorate}
                className="btn py-2 px-4 rounded-full"
              >
                ابحث
              </button>
              <input
                type="text"
                placeholder="...رقم البطاقة"
                className="form-control flex-1 px-2 search text-right fs-5 outline-none "
                onChange={governorateByCode}
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          {filteredGovernorate ? (
            <div className="box flex justify-center sm:flex-col-reverse md:flex-row sm:px-40 md:px-56 gap-7 pt-3 md:pt-12">
              <div className="boxes p-3 flex-1 rounded-lg">
                <div className="flex justify-end gap-2 items-center py-2">
                  <h1>تاريخ الميلاد</h1>
                  <i className="fa-solid fa-brush icon rounded-full p-2 "></i>
                </div>
                <div className="py-4 border-t-2 border-c">
                  <h1 className="text-2xl text-center">{birth} </h1>
                </div>
              </div>

              <div className="boxes p-3 flex-1 rounded-lg">
                <div className="flex justify-end gap-2 items-center py-2">
                  <h1> محل الإقامة</h1>
                  <i className="fa-solid fa-location-dot icon rounded-full p-2 "></i>
                </div>
                <div className="py-4 border-t-2 border-c">
                  <h1 className="text-2xl text-center">
                    {filteredGovernorate.name}{" "}
                  </h1>
                </div>
              </div>

              <div className="boxes p-3 flex-1 rounded-lg">
                <div className="flex justify-end gap-2 items-center py-2">
                  <h1> النوع</h1>
                  <i className="fa-solid fa-brush icon rounded-full p-2 "></i>
                </div>
                <div className="py-4 border-t-2 border-c">
                  <h1 className="text-2xl text-center">{showGen}</h1>
                </div>
              </div>
              <div className=" blueBG p-10 flex-1 flex justify-center items-center rounded-lg">
                <h1 className="text-center ">قدرنا نعرف الأتي</h1>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

{
  /* <input
type="text"
placeholder="search by code"
className="form-control w-100 fs-5"
onChange={governorateByCode}
/>
<button onClick={governorate}>search</button>

<div>
{filteredGovernorate ? filteredGovernorate.name : "No result found"}
</div> */
}
