/* ==========================================================
   Technology Badge Registry
========================================================== */

const TECH_BADGES = {
  ros2: {
    name: "ROS 2",
    icon: "/assets/icons/ros.svg",
    className: "c-tech-badge--ros2",
  },

  cpp: {
    name: "C++",
    icon: "/assets/icons/cpp.svg",
    className: "c-tech-badge--cpp",
  },

  python: {
    name: "Python",
    icon: "/assets/icons/python.svg",
    className: "c-tech-badge--python",
  },

  arduino: {
    name: "Arduino",
    icon: "/assets/icons/arduino.svg",
    className: "c-tech-badge--arduino",
  },

  stm32: {
    name: "STM32",
    icon: "/assets/icons/stm32.svg",
    className: "c-tech-badge--stm32",
  },

  esp32: {
    name: "ESP32",
    icon: "/assets/icons/esp32.svg",
    className: "c-tech-badge--esp32",
  },

  opencv: {
    name: "OpenCV",
    icon: "/assets/icons/opencv.svg",
    className: "c-tech-badge--opencv",
  },

  gazebo: {
    name: "Gazebo",
    icon: "/assets/icons/gazebo.svg",
    className: "c-tech-badge--gazebo",
  },

  moveit: {
    name: "MoveIt",
    icon: "/assets/icons/moveit.svg",
    className: "c-tech-badge--moveit",
  },

  docker: {
    name: "Docker",
    icon: "/assets/icons/docker.svg",
    className: "c-tech-badge--docker",
  },

  git: {
    name: "Git",
    icon: "/assets/icons/git.svg",
    className: "c-tech-badge--git",
  },

  linux: {
    name: "Linux",
    icon: "/assets/icons/linux.svg",
    className: "c-tech-badge--linux",
  },

  ubuntu: {
    name: "Ubuntu",
    icon: "/assets/icons/ubuntu.svg",
    className: "c-tech-badge--ubuntu",
  },

  nav2: {
    name: "Nav2",
    icon: "/assets/icons/nav2.svg",
    className: "c-tech-badge--nav2",
  },

  pytorch: {
    name: "PyTorch",
    icon: "/assets/icons/pytorch.svg",
    className: "c-tech-badge--pytorch",
  },

  raspberrypi: {
    name: "RaspberryPi",
    icon: "/assets/icons/raspberrypi.svg",
    className: "c-tech-badge--raspberrypi",
  },

  ai: {
    name: "AI",
    icon: "/assets/icons/ai.svg",
    className: "c-tech-badge--ai",
  },

  yolo: {
    name: "YOLO",
    icon: "/assets/icons/yolo.svg",
    className: "c-tech-badge--yolo",
  },
};
/* ==========================================================
   Badge Renderer
========================================================== */

function renderTechBadges() {
  const techLists = document.querySelectorAll("[data-tech]");

  techLists.forEach((list) => {
    // Already rendered — don't create duplicate badges
    if (list.dataset.badgesRendered === "true") {
      return;
    }

    const technologies = list.dataset.tech.split(/\s+/).filter(Boolean);

    technologies.forEach((technology) => {
      const badge = TECH_BADGES[technology];

      if (!badge) {
        console.warn(`Unknown technology badge: ${technology}`);
        return;
      }

      const item = document.createElement("li");

      const badgeElement = document.createElement("span");
      badgeElement.className = `c-tech-badge ${badge.className}`;

      const icon = document.createElement("img");
      icon.className = "c-tech-badge__icon";
      icon.src = badge.icon;
      icon.alt = "";
      icon.setAttribute("aria-hidden", "true");

      const name = document.createElement("span");
      name.textContent = badge.name;

      badgeElement.appendChild(icon);
      badgeElement.appendChild(name);

      item.appendChild(badgeElement);
      list.appendChild(item);
    });

    list.dataset.badgesRendered = "true";
  });
}

/* ==========================================================
   Initialize
========================================================== */

document.addEventListener("DOMContentLoaded", renderTechBadges);
window.renderTechBadges = renderTechBadges;
