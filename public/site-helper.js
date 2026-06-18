/**
 * 页面辅助工具 - 提示卡片、关键词徽章与访问说明
 * 生成一些UI元素帮助用户了解网站内容
 */
(function() {
  "use strict";

  const SITE_URL = "https://www.yun-ya-bet.com.cn";
  const KEYWORDS = ["开云押注", "体育竞猜", "真人娱乐", "电子游艺", "彩票投注"];

  /**
   * 创建提示卡片元素
   * @param {string} title - 卡片标题
   * @param {string} message - 卡片内容
   * @param {string} type - 卡片类型 (info/warning/success)
   * @returns {HTMLElement}
   */
  function createTipCard(title, message, type) {
    const card = document.createElement("div");
    card.className = "tip-card tip-card-" + type;
    const titleEl = document.createElement("h3");
    titleEl.textContent = title;
    const messageEl = document.createElement("p");
    messageEl.textContent = message;
    card.appendChild(titleEl);
    card.appendChild(messageEl);
    return card;
  }

  /**
   * 创建关键词徽章
   * @param {string} text - 徽章文本
   * @returns {HTMLElement}
   */
  function createBadge(text) {
    const badge = document.createElement("span");
    badge.className = "keyword-badge";
    badge.textContent = text;
    return badge;
  }

  /**
   * 创建访问说明区域
   * @returns {HTMLElement}
   */
  function createAccessInfo() {
    const container = document.createElement("div");
    container.className = "access-info";
    const heading = document.createElement("h4");
    heading.textContent = "访问说明";
    const list = document.createElement("ul");
    const items = [
      "请确保您已满18周岁",
      "建议使用最新版浏览器访问",
      "如遇加载缓慢请尝试刷新页面",
      "本站采用加密连接，保障您的数据安全"
    ];
    items.forEach(function(item) {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    container.appendChild(heading);
    container.appendChild(list);
    return container;
  }

  /**
   * 生成关键词徽章组
   * @returns {HTMLElement}
   */
  function createBadgeGroup() {
    const group = document.createElement("div");
    group.className = "badge-group";
    KEYWORDS.forEach(function(keyword) {
      group.appendChild(createBadge(keyword));
    });
    return group;
  }

  /**
   * 构建提示卡片并插入到页面中
   */
  function renderTipCards() {
    const cardContainer = document.createElement("div");
    cardContainer.className = "tip-cards-container";
    const infoCard = createTipCard(
      "欢迎访问",
      "欢迎来到" + SITE_URL + "，祝您游戏愉快！",
      "success"
    );
    const warningCard = createTipCard(
      "温馨提示",
      "请理性娱乐，合理安排时间。" + KEYWORDS[0] + "仅为娱乐方式之一。",
      "info"
    );
    cardContainer.appendChild(infoCard);
    cardContainer.appendChild(warningCard);
    const mainContent = document.querySelector("main, #content, .content, body");
    if (mainContent) {
      mainContent.insertBefore(cardContainer, mainContent.firstChild);
    } else {
      document.body.insertBefore(cardContainer, document.body.firstChild);
    }
  }

  /**
   * 插入关键词徽章到页面侧边栏或页脚
   */
  function renderBadges() {
    const badgeContainer = document.createElement("div");
    badgeContainer.className = "badge-container";
    const label = document.createElement("span");
    label.textContent = "热门关键词：";
    badgeContainer.appendChild(label);
    badgeContainer.appendChild(createBadgeGroup());
    const sidebar = document.querySelector("aside, .sidebar, footer, #footer");
    if (sidebar) {
      sidebar.appendChild(badgeContainer);
    } else {
      document.body.appendChild(badgeContainer);
    }
  }

  /**
   * 插入访问说明到页面页脚
   */
  function renderAccessInfo() {
    const infoEl = createAccessInfo();
    const footer = document.querySelector("footer, #footer, .footer");
    if (footer) {
      footer.appendChild(infoEl);
    } else {
      document.body.appendChild(infoEl);
    }
  }

  /**
   * 添加基础样式
   */
  function addStyles() {
    const style = document.createElement("style");
    style.textContent = `
      .tip-card { padding: 15px; margin: 10px 0; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
      .tip-card-success { background: #e8f5e9; border-left: 4px solid #4caf50; }
      .tip-card-info { background: #e3f2fd; border-left: 4px solid #2196f3; }
      .tip-card-warning { background: #fff3e0; border-left: 4px solid #ff9800; }
      .keyword-badge { display: inline-block; background: #1976d2; color: #fff; padding: 4px 10px; margin: 4px; border-radius: 12px; font-size: 0.85em; }
      .badge-group { display: inline; }
      .access-info { background: #f5f5f5; padding: 12px; border-radius: 6px; margin-top: 15px; }
      .access-info ul { margin: 8px 0 0 20px; }
    `;
    document.head.appendChild(style);
  }

  // 初始化
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      addStyles();
      renderTipCards();
      renderBadges();
      renderAccessInfo();
    });
  } else {
    addStyles();
    renderTipCards();
    renderBadges();
    renderAccessInfo();
  }
})();