import React from 'react';


export const VerticalSpeedTape = ({ style, ...props }) => {
  const { scale = 1.0, verticalSpeed = 0.0 } = props
  return (
    <div style={{ ...style }}>
      <svg viewBox="0 0 80 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="480" fill="#777777" />
        <path d="M25 240H50" stroke="white" strokeWidth="3" />
        <path d="M25 340H35" stroke="white" strokeWidth="3" />
        <path d="M25 140H35" stroke="white" strokeWidth="3" />
        <path d="M25 375H33" stroke="white" strokeWidth="2" />
        <path d="M25 100H33" stroke="white" strokeWidth="2" />
        <path d="M25 290H35" stroke="white" strokeWidth="2" />
        <path d="M25 190H35" stroke="white" strokeWidth="2" />
        <path d="M25 435H33" stroke="white" strokeWidth="2" />
        <path d="M25 45H33" stroke="white" strokeWidth="2" />
        <path d="M25 410H35" stroke="white" strokeWidth="3" />
        <path d="M25 70H35" stroke="white" strokeWidth="3" />
        <path d="M25 460H35" stroke="white" strokeWidth="3" />
        <path d="M25 20H35" stroke="white" strokeWidth="3" />
        <path d="M7.9637 347V345.24H11.7587V334.614L12.3967 332.117L10.9007 334.163L8.5687 336.231L7.3807 334.9L12.4187 330.28L14.0687 330.5V345.24H17.8637V347H7.9637Z" fill="white" />
        <path d="M7.9637 147V145.24H11.7587V134.614L12.3967 132.117L10.9007 134.163L8.5687 136.231L7.3807 134.9L12.4187 130.28L14.0687 130.5V145.24H17.8637V147H7.9637Z" fill="white" />
        <path d="M7.3587 417V415.152C7.69604 414.617 8.0627 414.089 8.4587 413.568C8.8547 413.047 9.25437 412.545 9.6577 412.061C10.0684 411.57 10.468 411.104 10.8567 410.664C11.2454 410.217 11.6047 409.806 11.9347 409.432C12.316 408.992 12.6827 408.589 13.0347 408.222C13.394 407.848 13.7094 407.481 13.9807 407.122C14.252 406.763 14.4684 406.392 14.6297 406.011C14.791 405.622 14.8717 405.197 14.8717 404.735C14.8717 404.383 14.8057 404.053 14.6737 403.745C14.5417 403.43 14.3547 403.158 14.1127 402.931C13.878 402.696 13.5957 402.513 13.2657 402.381C12.9357 402.242 12.5727 402.172 12.1767 402.172C11.7294 402.172 11.3407 402.234 11.0107 402.359C10.688 402.476 10.402 402.634 10.1527 402.832C9.9107 403.03 9.69804 403.254 9.5147 403.503C9.3387 403.745 9.1737 403.991 9.0197 404.24L7.4687 403.58C7.65937 403.103 7.90137 402.667 8.1947 402.271C8.49537 401.868 8.84737 401.523 9.2507 401.237C9.65404 400.944 10.1124 400.716 10.6257 400.555C11.139 400.394 11.711 400.313 12.3417 400.313C13.0824 400.313 13.7424 400.445 14.3217 400.709C14.901 400.973 15.3887 401.321 15.7847 401.754C16.188 402.179 16.4924 402.663 16.6977 403.206C16.9104 403.749 17.0167 404.299 17.0167 404.856C17.0167 405.421 16.9104 405.96 16.6977 406.473C16.4924 406.979 16.232 407.463 15.9167 407.925C15.6087 408.38 15.275 408.809 14.9157 409.212C14.5564 409.615 14.2264 409.993 13.9257 410.345C13.5444 410.792 13.163 411.232 12.7817 411.665C12.4004 412.098 12.0337 412.523 11.6817 412.941C11.337 413.352 11.0144 413.751 10.7137 414.14C10.413 414.521 10.1527 414.888 9.9327 415.24H17.6327V417H7.3587Z" fill="white" />
        <path d="M7.3587 77V75.152C7.69604 74.6167 8.0627 74.0887 8.4587 73.568C8.8547 73.0473 9.25437 72.545 9.6577 72.061C10.0684 71.5697 10.468 71.104 10.8567 70.664C11.2454 70.2167 11.6047 69.806 11.9347 69.432C12.316 68.992 12.6827 68.5887 13.0347 68.222C13.394 67.848 13.7094 67.4813 13.9807 67.122C14.252 66.7627 14.4684 66.3923 14.6297 66.011C14.791 65.6223 14.8717 65.197 14.8717 64.735C14.8717 64.383 14.8057 64.053 14.6737 63.745C14.5417 63.4297 14.3547 63.1583 14.1127 62.931C13.878 62.6963 13.5957 62.513 13.2657 62.381C12.9357 62.2417 12.5727 62.172 12.1767 62.172C11.7294 62.172 11.3407 62.2343 11.0107 62.359C10.688 62.4763 10.402 62.634 10.1527 62.832C9.9107 63.03 9.69804 63.2537 9.5147 63.503C9.3387 63.745 9.1737 63.9907 9.0197 64.24L7.4687 63.58C7.65937 63.1033 7.90137 62.667 8.1947 62.271C8.49537 61.8677 8.84737 61.523 9.2507 61.237C9.65404 60.9437 10.1124 60.7163 10.6257 60.555C11.139 60.3937 11.711 60.313 12.3417 60.313C13.0824 60.313 13.7424 60.445 14.3217 60.709C14.901 60.973 15.3887 61.3213 15.7847 61.754C16.188 62.1793 16.4924 62.6633 16.6977 63.206C16.9104 63.7487 17.0167 64.2987 17.0167 64.856C17.0167 65.4207 16.9104 65.9597 16.6977 66.473C16.4924 66.979 16.232 67.463 15.9167 67.925C15.6087 68.3797 15.275 68.8087 14.9157 69.212C14.5564 69.6153 14.2264 69.993 13.9257 70.345C13.5444 70.7923 13.163 71.2323 12.7817 71.665C12.4004 72.0977 12.0337 72.523 11.6817 72.941C11.337 73.3517 11.0144 73.7513 10.7137 74.14C10.413 74.5213 10.1527 74.888 9.9327 75.24H17.6327V77H7.3587Z" fill="white" />
        <path d="M15.8947 452.216C15.8434 452.201 15.7664 452.194 15.6637 452.194C15.5684 452.187 15.4804 452.183 15.3997 452.183C14.8717 452.183 14.3584 452.267 13.8597 452.436C13.361 452.597 12.8917 452.828 12.4517 453.129C12.0117 453.43 11.6047 453.789 11.2307 454.207C10.864 454.625 10.5377 455.087 10.2517 455.593C9.97304 456.092 9.74204 456.627 9.5587 457.199C9.37537 457.771 9.25437 458.361 9.1957 458.97L10.1087 457.683C10.292 457.566 10.5047 457.456 10.7467 457.353C10.996 457.243 11.2564 457.148 11.5277 457.067C11.799 456.986 12.074 456.924 12.3527 456.88C12.6314 456.829 12.8954 456.803 13.1447 456.803C13.7827 456.803 14.395 456.891 14.9817 457.067C15.5757 457.243 16.1 457.514 16.5547 457.881C17.0167 458.248 17.3834 458.721 17.6547 459.3C17.9334 459.872 18.0727 460.558 18.0727 461.357C18.0727 462.149 17.937 462.901 17.6657 463.612C17.4017 464.316 17.0277 464.936 16.5437 465.471C16.0597 465.999 15.4804 466.417 14.8057 466.725C14.131 467.033 13.383 467.187 12.5617 467.187C11.843 467.187 11.205 467.073 10.6477 466.846C10.0977 466.611 9.61737 466.303 9.2067 465.922C8.79604 465.541 8.45137 465.104 8.1727 464.613C7.90137 464.122 7.6777 463.619 7.5017 463.106C7.33304 462.585 7.21204 462.072 7.1387 461.566C7.06537 461.06 7.0287 460.598 7.0287 460.18C7.0287 459.307 7.1167 458.457 7.2927 457.628C7.47604 456.799 7.73637 456.022 8.0737 455.296C8.41837 454.563 8.83637 453.892 9.3277 453.283C9.81904 452.667 10.3764 452.143 10.9997 451.71C11.6304 451.27 12.3197 450.929 13.0677 450.687C13.823 450.438 14.6334 450.313 15.4987 450.313C15.6087 450.313 15.7297 450.317 15.8617 450.324C15.9937 450.324 16.0964 450.331 16.1697 450.346L15.8947 452.216ZM9.2947 460.433C9.2947 460.638 9.2947 460.825 9.2947 460.994C9.30204 461.163 9.31304 461.328 9.3277 461.489C9.34237 461.65 9.36437 461.815 9.3937 461.984C9.42304 462.145 9.46337 462.325 9.5147 462.523C9.61737 462.941 9.7567 463.322 9.9327 463.667C10.116 464.004 10.3324 464.298 10.5817 464.547C10.8384 464.789 11.1317 464.98 11.4617 465.119C11.799 465.251 12.1767 465.317 12.5947 465.317C13.174 465.317 13.6654 465.207 14.0687 464.987C14.4794 464.767 14.813 464.477 15.0697 464.118C15.3264 463.751 15.5134 463.337 15.6307 462.875C15.7554 462.413 15.8177 461.944 15.8177 461.467C15.8177 461.005 15.748 460.598 15.6087 460.246C15.4767 459.894 15.286 459.604 15.0367 459.377C14.7874 459.142 14.4867 458.966 14.1347 458.849C13.79 458.732 13.405 458.673 12.9797 458.673C12.5837 458.673 12.1987 458.721 11.8247 458.816C11.4507 458.911 11.0987 459.04 10.7687 459.201C10.446 459.362 10.1564 459.549 9.8997 459.762C9.65037 459.975 9.4487 460.198 9.2947 460.433Z" fill="white" />
        <path d="M15.8947 12.216C15.8434 12.2013 15.7664 12.194 15.6637 12.194C15.5684 12.1867 15.4804 12.183 15.3997 12.183C14.8717 12.183 14.3584 12.2673 13.8597 12.436C13.361 12.5973 12.8917 12.8283 12.4517 13.129C12.0117 13.4297 11.6047 13.789 11.2307 14.207C10.864 14.625 10.5377 15.087 10.2517 15.593C9.97304 16.0917 9.74204 16.627 9.5587 17.199C9.37537 17.771 9.25437 18.3613 9.1957 18.97L10.1087 17.683C10.292 17.5657 10.5047 17.4557 10.7467 17.353C10.996 17.243 11.2564 17.1477 11.5277 17.067C11.799 16.9863 12.074 16.924 12.3527 16.88C12.6314 16.8287 12.8954 16.803 13.1447 16.803C13.7827 16.803 14.395 16.891 14.9817 17.067C15.5757 17.243 16.1 17.5143 16.5547 17.881C17.0167 18.2477 17.3834 18.7207 17.6547 19.3C17.9334 19.872 18.0727 20.5577 18.0727 21.357C18.0727 22.149 17.937 22.9007 17.6657 23.612C17.4017 24.316 17.0277 24.9357 16.5437 25.471C16.0597 25.999 15.4804 26.417 14.8057 26.725C14.131 27.033 13.383 27.187 12.5617 27.187C11.843 27.187 11.205 27.0733 10.6477 26.846C10.0977 26.6113 9.61737 26.3033 9.2067 25.922C8.79604 25.5407 8.45137 25.1043 8.1727 24.613C7.90137 24.1217 7.6777 23.6193 7.5017 23.106C7.33304 22.5853 7.21204 22.072 7.1387 21.566C7.06537 21.06 7.0287 20.598 7.0287 20.18C7.0287 19.3073 7.1167 18.4567 7.2927 17.628C7.47604 16.7993 7.73637 16.022 8.0737 15.296C8.41837 14.5627 8.83637 13.8917 9.3277 13.283C9.81904 12.667 10.3764 12.1427 10.9997 11.71C11.6304 11.27 12.3197 10.929 13.0677 10.687C13.823 10.4377 14.6334 10.313 15.4987 10.313C15.6087 10.313 15.7297 10.3167 15.8617 10.324C15.9937 10.324 16.0964 10.3313 16.1697 10.346L15.8947 12.216ZM9.2947 20.433C9.2947 20.6383 9.2947 20.8253 9.2947 20.994C9.30204 21.1627 9.31304 21.3277 9.3277 21.489C9.34237 21.6503 9.36437 21.8153 9.3937 21.984C9.42304 22.1453 9.46337 22.325 9.5147 22.523C9.61737 22.941 9.7567 23.3223 9.9327 23.667C10.116 24.0043 10.3324 24.2977 10.5817 24.547C10.8384 24.789 11.1317 24.9797 11.4617 25.119C11.799 25.251 12.1767 25.317 12.5947 25.317C13.174 25.317 13.6654 25.207 14.0687 24.987C14.4794 24.767 14.813 24.4773 15.0697 24.118C15.3264 23.7513 15.5134 23.337 15.6307 22.875C15.7554 22.413 15.8177 21.9437 15.8177 21.467C15.8177 21.005 15.748 20.598 15.6087 20.246C15.4767 19.894 15.286 19.6043 15.0367 19.377C14.7874 19.1423 14.4867 18.9663 14.1347 18.849C13.79 18.7317 13.405 18.673 12.9797 18.673C12.5837 18.673 12.1987 18.7207 11.8247 18.816C11.4507 18.9113 11.0987 19.0397 10.7687 19.201C10.446 19.3623 10.1564 19.5493 9.8997 19.762C9.65037 19.9747 9.4487 20.1983 9.2947 20.433Z" fill="white" />
      </svg>
    </div>
  );
};