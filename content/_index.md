---
title: 'MOON YUBIN'
date: 2023-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: hero
    id: top
    content:
      title: 문유빈 개발자 포트폴리오
      text: 안녕하세요😊 쉽고 간단할 걸 추구하는 개발자 문유빈입니다.  
      primary_action:
        text: GitHub
        url: https://github.com/YUBIN-githubb
        icon: brands/github
      secondary_action:
        text: Read the resume
        url: https://excessive-frame-7c0.notion.site/a2d778b0cda249c7a1fc3686f99b81f2?pvs=4
      # announcement:
      #   text: ""
      #   link:
      #     text: "Read more"
      #     url: "/blog/"
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      # For full-screen, add `min-h-screen` below
      css_class: "dark"
      background:
        color: "navy"
        image:
          # Add your image background to `assets/media/`.
          filename: main-background.png
          filters:
            brightness: 0.5
  - block: stats
    id: info
    content:
      items:
        - statistic: "Profile"
          description: |  
            문유빈  
            2002.10.04
        - statistic: "Contact"
          description: |  
            010-5329-5744  
            devyubin@gmail.com
        - statistic: "Education"
          description: |  
            전북대학교 바이오메디컬공학부 헬스케어정보공학전공 학사  
            전북대학교 IT정보공학과 학사  
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
      # Reduce spacing
      spacing:
        padding: ["1rem", 0, "1rem", 0]
  - block: features
    id: skills
    content:
      title: Skills
      #text: Build your site with blocks 🧱
      items:
        - name: Python
          icon: custom/python-logo
          description: Django, Flask
        - name: Javascript
          icon: custom/javascript-logo
          description: express, Node.js
        - name: Java
          icon: custom/java-logo
          description: Springboot
        - name: AI
          icon: custom/robot-logo
          description: Lagnchain, RAG, TextMining
        - name: Visualization
          icon: custom/chart-logo
          description: R, Python
        # - name: Swappable Blocks
        #   icon: rectangle-group
        #   description: Build your pages with blocks - no coding required!
  - block: cta-image-paragraph
    id: graduation-project
    content:
      items:
        - title: RAG를 적용한 의료기기 임상시험 가이드라인 AI
          text: 바이오메디컬공학부 졸업프로젝트
          feature_icon: check
          features:
            - 임상시험 가이드라인 AI는 의료기기 임상시험 시 필요한 가이드라인을 상황에 맞게 제공하는 에이전트 AI입니다.
            - 할루시네이션을 줄이도록 RAG 기술을 도입하였습니다. LLM은 식약처에서 제공한 민원인 안내서 문서만을 참고하여 답변합니다.
            - 상황에 맞는 임상시험 가이드라인을 AI에 제시하도록 요구할 수 있습니다.
          # Upload image to `assets/media/` and reference the filename here
          image: ragAI.jpg
          button:
            text: Github Respository
            url: https://github.com/YUBIN-githubb/KimRyuMoon_repo
        - title: AI 기반 소셜미디어 뉴스 검색 및 감성분석
          text: IT정보공학과 졸업프로젝트
          feature_icon: bolt
          features:
            - 유튜브와 인스타그램의 실시간 데이터를 수집하고 분석합니다.
            - 뉴스 제목과 내용에서 주요 키워드를 추출하여 긍정, 부정, 중립 감성으로 분류합니다.
            - 워드클라우드와 색상 표시를 사용하여 분석 결과를 직관적으로 표현합니다.
          # Upload image to `assets/media/` and reference the filename here
          image: textmining.jpg
          # button:
          #   text: Join Discord
          #   url: https://discord.gg/z8wNYzb
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
  - block: testimonials
    content:
      title: ""
      text: ""
      items:
        - name: "문유빈"
          role: "Software Engineering"
          # Upload image to `assets/media/` and reference the filename here
          image: "avatar.jpg"
          text: "안녕하세요 문유빈 입니다.  
            😎 모든것은 재미있어야 합니다  
            👌 불편한 점을 개선하는 걸 좋아합니다  
            🦻 쉽게 말하고 열심히 들으려고 노력합니다"
    design:
      spacing:
        # Reduce bottom spacing so the testimonial appears vertically centered between sections
        padding: ["6rem", 0, 0, 0]
  - block: cta-card
    id: resume
    content:
      title: 팀에 기여할 준비가 되어있습니다!
      text: 이력서를 확인해주세요
      button:
        text: Resume
        url: https://excessive-frame-7c0.notion.site/a2d778b0cda249c7a1fc3686f99b81f2?pvs=4
    design:
      card:
        # Card background color (CSS class)
        css_class: "bg-primary-700"
        css_style: ""
---
