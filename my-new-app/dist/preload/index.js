"use strict";
function domReady(condition = ["complete", "interactive"]) {
  return new Promise((resolve) => {
    if (condition.includes(document.readyState)) {
      resolve(true);
    } else {
      document.addEventListener("readystatechange", () => {
        if (condition.includes(document.readyState)) {
          resolve(true);
        }
      });
    }
  });
}
function useLoading() {
  const className = `loaders-css__square-spin`;
  const styleContent = `
@keyframes square-spin {
  25% { transform: perspective(100px) rotateX(180deg) rotateY(0); }
  50% { transform: perspective(100px) rotateX(180deg) rotateY(180deg); }
  75% { transform: perspective(100px) rotateX(0) rotateY(180deg); }
  100% { transform: perspective(100px) rotateX(0) rotateY(0); }
}
.${className} > div {
  animation-fill-mode: both;
  width: 50px;
  height: 50px;
  background: #fff;
  animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
}
.app-loading-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #282c34;
  z-index: 9;
}
    `;
  const oStyle = document.createElement("style");
  const oDiv = document.createElement("div");
  oStyle.id = "app-loading-style";
  oStyle.innerHTML = styleContent;
  oDiv.className = "app-loading-wrap";
  oDiv.innerHTML = `<div class="${className}"><div></div></div>`;
  return {
    appendLoading() {
      safe.append(document.head, oStyle);
      safe.append(document.body, oDiv);
    },
    removeLoading() {
      safe.remove(document.head, oStyle);
      safe.remove(document.body, oDiv);
    }
  };
}
const safe = {
  append(parent, child) {
    if (!Array.from(parent.children).find((e) => e === child)) {
      return parent.appendChild(child);
    }
  },
  remove(parent, child) {
    if (Array.from(parent.children).find((e) => e === child)) {
      return parent.removeChild(child);
    }
  }
};
console.log(`[preload] node version: ${process.versions.node}`);
console.log(`[preload] chrome version: ${process.versions.chrome}`);
console.log(`[preload] electron version: ${process.versions.electron}`);
console.log(`[preload] process.cwd(): ${process.cwd()}`);
console.log(`[preload] process.resourcesPath: ${process.resourcesPath}`);
console.log(`[preload] __dirname: ${__dirname}`);
console.log(`[preload] env.NODE_ENV: ${process.env.NODE_ENV}`);
const { appendLoading, removeLoading } = useLoading();
window.removeLoading = removeLoading;
domReady().then(appendLoading);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3BhY2thZ2VzL3BlcmxvYWQvdXRpbHMudHMiLCIuLi8uLi9wYWNrYWdlcy9wZXJsb2FkL2xvYWRpbmcudHMiLCIuLi8uLi9wYWNrYWdlcy9wZXJsb2FkL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLyoqIGRvY29tZW50IHJlYWR5ICovXG5leHBvcnQgZnVuY3Rpb24gZG9tUmVhZHkoY29uZGl0aW9uOiBEb2N1bWVudFJlYWR5U3RhdGVbXSA9IFsnY29tcGxldGUnLCAnaW50ZXJhY3RpdmUnXSkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgaWYgKGNvbmRpdGlvbi5pbmNsdWRlcyhkb2N1bWVudC5yZWFkeVN0YXRlKSkge1xuICAgICAgcmVzb2x2ZSh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBpZiAoY29uZGl0aW9uLmluY2x1ZGVzKGRvY3VtZW50LnJlYWR5U3RhdGUpKSB7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn1cbiIsIi8qKlxuICogaHR0cHM6Ly90b2JpYXNhaGxpbi5jb20vc3BpbmtpdFxuICogaHR0cHM6Ly9jb25ub3JhdGhlcnRvbi5jb20vbG9hZGVyc1xuICogaHR0cHM6Ly9wcm9qZWN0cy5sdWtlaGFhcy5tZS9jc3MtbG9hZGVyc1xuICogaHR0cHM6Ly9tYXRlamt1c3RlYy5naXRodWIuaW8vU3BpblRoYXRTaGl0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2FkaW5nKCkge1xuICBjb25zdCBjbGFzc05hbWUgPSBgbG9hZGVycy1jc3NfX3NxdWFyZS1zcGluYFxuICBjb25zdCBzdHlsZUNvbnRlbnQgPSBgXG5Aa2V5ZnJhbWVzIHNxdWFyZS1zcGluIHtcbiAgMjUlIHsgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMCk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMTgwZGVnKTsgfVxuICA3NSUgeyB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMTgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDApOyB9XG59XG4uJHtjbGFzc05hbWV9ID4gZGl2IHtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYW5pbWF0aW9uOiBzcXVhcmUtc3BpbiAzcyAwcyBjdWJpYy1iZXppZXIoMC4wOSwgMC41NywgMC40OSwgMC45KSBpbmZpbml0ZTtcbn1cbi5hcHAtbG9hZGluZy13cmFwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMyODJjMzQ7XG4gIHotaW5kZXg6IDk7XG59XG4gICAgYFxuICBjb25zdCBvU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIGNvbnN0IG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIG9TdHlsZS5pZCA9ICdhcHAtbG9hZGluZy1zdHlsZSdcbiAgb1N0eWxlLmlubmVySFRNTCA9IHN0eWxlQ29udGVudFxuICBvRGl2LmNsYXNzTmFtZSA9ICdhcHAtbG9hZGluZy13cmFwJ1xuICBvRGl2LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+PGRpdj48L2Rpdj48L2Rpdj5gXG5cbiAgcmV0dXJuIHtcbiAgICBhcHBlbmRMb2FkaW5nKCkge1xuICAgICAgc2FmZS5hcHBlbmQoZG9jdW1lbnQuaGVhZCwgb1N0eWxlKVxuICAgICAgc2FmZS5hcHBlbmQoZG9jdW1lbnQuYm9keSwgb0RpdilcbiAgICB9LFxuICAgIHJlbW92ZUxvYWRpbmcoKSB7XG4gICAgICBzYWZlLnJlbW92ZShkb2N1bWVudC5oZWFkLCBvU3R5bGUpXG4gICAgICBzYWZlLnJlbW92ZShkb2N1bWVudC5ib2R5LCBvRGl2KVxuICAgIH0sXG4gIH1cbn1cblxuY29uc3Qgc2FmZSA9IHtcbiAgYXBwZW5kKHBhcmVudDogSFRNTEVsZW1lbnQsIGNoaWxkOiBIVE1MRWxlbWVudCkge1xuICAgIGlmICghQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLmZpbmQoZSA9PiBlID09PSBjaGlsZCkpIHtcbiAgICAgIHJldHVybiBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gICAgfVxuICB9LFxuICByZW1vdmUocGFyZW50OiBIVE1MRWxlbWVudCwgY2hpbGQ6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKS5maW5kKGUgPT4gZSA9PT0gY2hpbGQpKSB7XG4gICAgICByZXR1cm4gcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKVxuICAgIH1cbiAgfSxcbn1cbiIsImNvbnNvbGUubG9nKGBbcHJlbG9hZF0gbm9kZSB2ZXJzaW9uOiAke3Byb2Nlc3MudmVyc2lvbnMubm9kZX1gKTtcbmNvbnNvbGUubG9nKGBbcHJlbG9hZF0gY2hyb21lIHZlcnNpb246ICR7cHJvY2Vzcy52ZXJzaW9ucy5jaHJvbWV9YCk7XG5jb25zb2xlLmxvZyhgW3ByZWxvYWRdIGVsZWN0cm9uIHZlcnNpb246ICR7cHJvY2Vzcy52ZXJzaW9ucy5lbGVjdHJvbn1gKTtcbmNvbnNvbGUubG9nKGBbcHJlbG9hZF0gcHJvY2Vzcy5jd2QoKTogJHtwcm9jZXNzLmN3ZCgpfWApO1xuY29uc29sZS5sb2coYFtwcmVsb2FkXSBwcm9jZXNzLnJlc291cmNlc1BhdGg6ICR7cHJvY2Vzcy5yZXNvdXJjZXNQYXRofWApO1xuY29uc29sZS5sb2coYFtwcmVsb2FkXSBfX2Rpcm5hbWU6ICR7X19kaXJuYW1lfWApO1xuY29uc29sZS5sb2coYFtwcmVsb2FkXSBlbnYuTk9ERV9FTlY6ICR7cHJvY2Vzcy5lbnYuTk9ERV9FTlZ9YCk7XG5cbmltcG9ydCB7IGRvbVJlYWR5IH0gZnJvbSAnLi91dGlscydcbmltcG9ydCB7IHVzZUxvYWRpbmcgfSBmcm9tICcuL2xvYWRpbmcnXG5cbmNvbnN0IHsgYXBwZW5kTG9hZGluZywgcmVtb3ZlTG9hZGluZyB9ID0gdXNlTG9hZGluZygpXG53aW5kb3cucmVtb3ZlTG9hZGluZyA9IHJlbW92ZUxvYWRpbmdcblxuZG9tUmVhZHkoKS50aGVuKGFwcGVuZExvYWRpbmcpXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVPLFNBQVMsU0FBUyxZQUFrQyxDQUFDLFlBQVksYUFBYSxHQUFHO0FBQy9FLFNBQUEsSUFBSSxRQUFRLENBQVcsWUFBQTtBQUM1QixRQUFJLFVBQVUsU0FBUyxTQUFTLFVBQVUsR0FBRztBQUMzQyxjQUFRLElBQUk7QUFBQSxJQUFBLE9BQ1A7QUFDSSxlQUFBLGlCQUFpQixvQkFBb0IsTUFBTTtBQUNsRCxZQUFJLFVBQVUsU0FBUyxTQUFTLFVBQVUsR0FBRztBQUMzQyxrQkFBUSxJQUFJO0FBQUEsUUFDZDtBQUFBLE1BQUEsQ0FDRDtBQUFBLElBQ0g7QUFBQSxFQUFBLENBQ0Q7QUFDSDtBQ1JPLFNBQVMsYUFBYTtBQUMzQixRQUFNLFlBQVk7QUFDbEIsUUFBTSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FPcEIsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JKLFFBQUEsU0FBUyxTQUFTLGNBQWMsT0FBTztBQUN2QyxRQUFBLE9BQU8sU0FBUyxjQUFjLEtBQUs7QUFFekMsU0FBTyxLQUFLO0FBQ1osU0FBTyxZQUFZO0FBQ25CLE9BQUssWUFBWTtBQUNaLE9BQUEsWUFBWSxlQUFlLFNBQVM7QUFFbEMsU0FBQTtBQUFBLElBQ0wsZ0JBQWdCO0FBQ1QsV0FBQSxPQUFPLFNBQVMsTUFBTSxNQUFNO0FBQzVCLFdBQUEsT0FBTyxTQUFTLE1BQU0sSUFBSTtBQUFBLElBQ2pDO0FBQUEsSUFDQSxnQkFBZ0I7QUFDVCxXQUFBLE9BQU8sU0FBUyxNQUFNLE1BQU07QUFDNUIsV0FBQSxPQUFPLFNBQVMsTUFBTSxJQUFJO0FBQUEsSUFDakM7QUFBQSxFQUFBO0FBRUo7QUFFQSxNQUFNLE9BQU87QUFBQSxFQUNYLE9BQU8sUUFBcUIsT0FBb0I7QUFDMUMsUUFBQSxDQUFDLE1BQU0sS0FBSyxPQUFPLFFBQVEsRUFBRSxLQUFLLENBQUEsTUFBSyxNQUFNLEtBQUssR0FBRztBQUNoRCxhQUFBLE9BQU8sWUFBWSxLQUFLO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPLFFBQXFCLE9BQW9CO0FBQzFDLFFBQUEsTUFBTSxLQUFLLE9BQU8sUUFBUSxFQUFFLEtBQUssQ0FBQSxNQUFLLE1BQU0sS0FBSyxHQUFHO0FBQy9DLGFBQUEsT0FBTyxZQUFZLEtBQUs7QUFBQSxJQUNqQztBQUFBLEVBQ0Y7QUFDRjtBQ2xFQSxRQUFRLElBQUksMkJBQTJCLFFBQVEsU0FBUyxJQUFJLEVBQUU7QUFDOUQsUUFBUSxJQUFJLDZCQUE2QixRQUFRLFNBQVMsTUFBTSxFQUFFO0FBQ2xFLFFBQVEsSUFBSSwrQkFBK0IsUUFBUSxTQUFTLFFBQVEsRUFBRTtBQUN0RSxRQUFRLElBQUksNEJBQTRCLFFBQVEsSUFBQSxDQUFLLEVBQUU7QUFDdkQsUUFBUSxJQUFJLG9DQUFvQyxRQUFRLGFBQWEsRUFBRTtBQUN2RSxRQUFRLElBQUksd0JBQXdCLFNBQVMsRUFBRTtBQUMvQyxRQUFRLElBQUksMkJBQTJCLFFBQVEsSUFBSSxRQUFRLEVBQUU7QUFLN0QsTUFBTSxFQUFFLGVBQWUsa0JBQWtCO0FBQ3pDLE9BQU8sZ0JBQWdCO0FBRXZCLFNBQVMsRUFBRSxLQUFLLGFBQWE7In0=
