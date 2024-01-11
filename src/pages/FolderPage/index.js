import "./style.css";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import AddLinkBar from "../../components/AddLinkBar";
import SearchBar from "../../components/SearchBar";
import FilterButton from "../../components/FilterButton";
import addIcon from "../../assets/add.svg";

const FolderPage = ({ user, folderObj }) => {
  const { folder = {} } = folderObj;
  const { owner = {}, links = [] } = folder;

  return (
    <>
      <Nav user={user} />
      <main>
        <section className="AddLinkBar-section">
          <div className="AddLinkBar-wrapper">
            <AddLinkBar />
          </div>
        </section>

        <section className="FolderPage-section">
          <div className="SearchBar-wrapper">
            <SearchBar />
          </div>
          <div className="FilterButton-container">
            <div className="FilterButton-wrapper">
              <FilterButton>전체</FilterButton>
              <FilterButton>⭐ 즐겨찾기</FilterButton>
              <FilterButton>코딩 팁</FilterButton>
              <FilterButton>유용한 글</FilterButton>
              <FilterButton>나만의 장소</FilterButton>
            </div>
            <button className="add-button">
              <img className="add-icon" src={addIcon} alt="필터링 폴더를 새로 생성하는 버튼" />
            </button>
          </div>

          {/* <SharedLinks className="SharedPage-folder-links" links={links} /> */}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FolderPage;
