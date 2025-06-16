import React from "react";
import "@/app/(main)/projects_test/[id]/page.css";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      {/* 헤더 */}
      <header className="header">
        <h1 className="header-title">팀 프로젝트</h1>
        {/* <p className="header-subtitle">실시간 협업이 가능한 태스크 관리 웹 앱</p> */}
      </header>

      {/* 메인 콘텐츠 */}
      <main className="main-content">
        {/* 프로젝트 개요 */}
        <div className="project-overview">
          <h2 className="section-title">개요</h2>
          <Image
            width={700}
            height={500}
            className="project-image"
            src="/images/todo.png"
            alt="프로젝트 1"
          />
          <p className="project-description">
            팀프로젝트 Todo Web은 할일을 관리할 수 있는 웹 애플리케이션입니다.
            이 앱은 사용자가 할 일을 추가, 수정, 삭제하고, 완료된 할 일을 체크할
            수 있는 기능을 제공합니다. 또한, 사용자 친화적인 인터페이스를 통해
            직관적으로 사용할 수 있도록 설계되었습니다.
          </p>
          <h3 className="subsection-title">사용 기술</h3>
          <div className="tech-stack">
            <span className="tech-item">Javascript</span>
            <span className="tech-item">Css</span>
            <span className="tech-item">Html</span>
          </div>
          <h3 className="subsection-title">링크</h3>
          <div className="links">
            <Link
              href="http://52.231.101.23:3001/projects_test"
              className="link-button live-demo"
            >
              라이브 데모
            </Link>
            <Link
              href="https://github.com/JoongBuGit/web_programming_site_modify3"
              className="link-button github"
            >
              GitHub
            </Link>
          </div>
          {/* <Link href="/projects" className="back-link">
            ← 프로젝트 목록으로 돌아가기
          </Link> */}
        </div>

        {/* 별도의 사진 갤러리 섹션 */}
        <div className="gallery-section">
          <h2 className="section-title">사진 갤러리</h2>
          <div className="gallery">
            <img
              className="gallery-image"
              src="https://via.placeholder.com/800x600"
              alt="스크린샷 1"
            />
            <img
              className="gallery-image"
              src="https://via.placeholder.com/800x600"
              alt="스크린샷 2"
            />
            <img
              className="gallery-image"
              src="https://via.placeholder.com/800x600"
              alt="스크린샷 3"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
