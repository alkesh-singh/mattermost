// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

type SvgProps = {
    width?: number;
    height?: number;
}

const SvgComponent = (props: SvgProps) => (
    <svg
        width={props.width ? props.width.toString() : '376'}
        height={props.height ? props.height.toString() : '376'}
        fill='var(--center-channel-bg)'
        viewBox='0 0 376 376'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g clipPath='url(#clip0_1_152)'>
            <path
                d='M77.5404 124.26C78.3019 124.196 79.068 124.312 79.7764 124.598C80.4848 124.885 81.1157 125.334 81.6181 125.909C82.1205 126.485 82.4804 127.17 82.6683 127.91C82.8563 128.651 82.8671 129.424 82.7001 130.17L79.585 154.926C79.5617 155.688 79.3594 156.434 78.9947 157.103C78.63 157.772 78.1131 158.347 77.4854 158.78C76.8578 159.213 76.1373 159.493 75.3817 159.596C74.626 159.7 73.8565 159.625 73.1353 159.377L49.9652 152.251C48.3884 151.657 47.0543 150.555 46.173 149.12C45.2917 147.684 44.9134 145.997 45.0975 144.323L46.6552 131.921C46.8909 130.248 47.6805 128.702 48.898 127.529C50.1154 126.357 51.6907 125.625 53.3726 125.452L77.5404 124.26Z'
                fill='#63697E'
            />
            <path
                d='M77.6866 175.889C78.18 175.309 78.8026 174.853 79.5045 174.558C80.2064 174.262 80.9681 174.135 81.728 174.187C82.4879 174.239 83.2249 174.469 83.8799 174.857C84.5349 175.246 85.0895 175.782 85.4991 176.424L100.832 196.122C101.356 196.678 101.742 197.348 101.958 198.08C102.175 198.811 102.216 199.583 102.078 200.334C101.941 201.084 101.629 201.792 101.167 202.399C100.705 203.007 100.107 203.498 99.4206 203.831L77.9786 215.164C76.4444 215.876 74.7151 216.052 73.0688 215.664C71.4224 215.276 69.9545 214.346 68.9005 213.024L61.2338 203.175C60.2178 201.826 59.6827 200.176 59.7136 198.489C59.7444 196.801 60.3394 195.172 61.4041 193.861L77.6866 175.889Z'
                fill='#63697E'
            />
            <path
                d='M114.437 212.295C114.373 211.534 114.489 210.768 114.776 210.061C115.062 209.353 115.512 208.722 116.088 208.22C116.664 207.718 117.35 207.359 118.09 207.171C118.831 206.983 119.606 206.972 120.352 207.139L145.128 210.252C145.89 210.275 146.637 210.477 147.307 210.841C147.976 211.206 148.551 211.722 148.985 212.35C149.418 212.977 149.698 213.697 149.802 214.452C149.905 215.207 149.83 215.976 149.582 216.696L142.451 239.872C141.859 241.45 140.758 242.786 139.32 243.667C137.883 244.548 136.192 244.924 134.516 244.736L122.104 243.18C120.43 242.944 118.882 242.155 117.709 240.939C116.536 239.722 115.804 238.148 115.63 236.468L114.437 212.295Z'
                fill='#63697E'
            />
            <path
                d='M165.986 212.173C165.401 211.68 164.941 211.057 164.642 210.353C164.343 209.649 164.214 208.885 164.266 208.122C164.319 207.359 164.55 206.619 164.942 205.963C165.334 205.306 165.875 204.751 166.522 204.342L186.236 189.046C186.791 188.523 187.462 188.137 188.195 187.921C188.927 187.705 189.699 187.664 190.45 187.801C191.201 187.938 191.91 188.25 192.518 188.711C193.126 189.173 193.617 189.77 193.951 190.456L205.293 211.857C206.002 213.394 206.177 215.125 205.789 216.773C205.401 218.421 204.472 219.892 203.151 220.952L193.415 228.588C192.072 229.615 190.421 230.159 188.729 230.133C187.038 230.106 185.405 229.511 184.094 228.442L165.986 212.173Z'
                fill='#63697E'
            />
            <path
                d='M202.421 175.549C201.664 175.608 200.903 175.489 200.2 175.202C199.497 174.915 198.871 174.468 198.372 173.896C197.873 173.324 197.515 172.644 197.326 171.909C197.138 171.174 197.124 170.405 197.285 169.663L200.376 144.882C200.403 144.123 200.608 143.38 200.975 142.714C201.341 142.047 201.858 141.476 202.485 141.046C203.112 140.616 203.832 140.338 204.585 140.236C205.339 140.133 206.107 140.209 206.826 140.456L230.02 147.582C231.605 148.165 232.946 149.265 233.829 150.703C234.712 152.141 235.085 153.834 234.888 155.51L233.33 167.888C233.103 169.565 232.316 171.115 231.097 172.289C229.878 173.463 228.298 174.192 226.613 174.357L202.421 175.549Z'
                fill='#63697E'
            />
            <path
                d='M202.299 123.92C201.808 124.506 201.185 124.968 200.482 125.268C199.778 125.569 199.014 125.699 198.251 125.65C197.488 125.6 196.747 125.371 196.088 124.982C195.43 124.593 194.873 124.054 194.462 123.409L179.153 103.686C178.629 103.131 178.244 102.461 178.027 101.729C177.811 100.998 177.77 100.226 177.907 99.4751C178.045 98.7247 178.357 98.017 178.819 97.4094C179.28 96.8018 179.878 96.3112 180.565 95.9773L201.982 84.6446C203.524 83.9381 205.257 83.7673 206.907 84.1596C208.557 84.5518 210.027 85.4845 211.085 86.809L218.727 96.6582C219.755 98.0009 220.3 99.6505 220.273 101.341C220.247 103.031 219.651 104.662 218.581 105.972L202.299 123.92Z'
                fill='#63697E'
            />
            <path
                d='M165.67 87.5145C165.734 88.2754 165.618 89.0407 165.331 89.7485C165.045 90.4564 164.595 91.0869 164.019 91.5889C163.444 92.0909 162.757 92.4504 162.017 92.6382C161.276 92.826 160.501 92.837 159.756 92.6701L134.979 89.5572C134.217 89.5339 133.471 89.332 132.801 88.9676C132.131 88.6033 131.556 88.0867 131.122 87.4596C130.689 86.8325 130.409 86.1123 130.305 85.3572C130.202 84.6022 130.277 83.8334 130.525 83.1128L137.656 59.9612C138.237 58.3756 139.336 57.0325 140.776 56.1496C142.216 55.2668 143.913 54.896 145.591 55.0974L157.979 56.6295C159.655 56.8609 161.204 57.6485 162.379 58.8657C163.553 60.083 164.283 61.6594 164.453 63.3415L165.67 87.5145Z'
                fill='#63697E'
            />
            <path
                d='M113.975 87.6604C114.556 88.1516 115.014 88.7722 115.312 89.4725C115.61 90.1728 115.74 90.9332 115.69 91.6924C115.64 92.4517 115.413 93.1887 115.026 93.8442C114.639 94.4997 114.104 95.0554 113.464 95.4667L93.7253 110.788C93.1697 111.311 92.4987 111.696 91.7665 111.913C91.0343 112.129 90.2616 112.17 89.5106 112.033C88.7596 111.895 88.0515 111.583 87.4434 111.122C86.8353 110.661 86.3441 110.063 86.0099 109.377L74.6684 87.9523C73.9631 86.4159 73.793 84.6877 74.1857 83.0435C74.5783 81.3993 75.511 79.9339 76.8346 78.8812L86.5699 71.2208C87.9164 70.1975 89.5688 69.6576 91.2602 69.6885C92.9517 69.7193 94.5833 70.3193 95.8914 71.3911L113.975 87.6604Z'
                fill='#63697E'
            />
            <path
                d='M152.746 196.293C143.565 198.815 133.841 198.56 124.804 195.56C115.768 192.56 107.825 186.95 101.98 179.439C96.1345 171.928 92.6496 162.854 91.966 153.364C91.2825 143.874 93.431 134.395 98.1395 126.125C102.848 117.855 109.905 111.166 118.419 106.904C126.932 102.642 136.519 100.999 145.967 102.181C155.415 103.364 164.3 107.32 171.499 113.548C178.697 119.777 183.884 127.999 186.406 137.173C189.779 149.473 188.129 162.607 181.818 173.692C175.507 184.777 165.051 192.905 152.746 196.293ZM119.743 76.2547C105.163 80.2486 92.0949 88.4726 82.1918 99.8869C72.2887 111.301 65.9948 125.393 64.1065 140.381C62.2181 155.369 64.8199 170.58 71.5827 184.091C78.3455 197.602 88.9658 208.806 102.101 216.286C115.236 223.766 130.295 227.187 145.376 226.115C160.456 225.044 174.88 219.529 186.824 210.268C198.767 201.006 207.695 188.414 212.477 174.083C217.259 159.752 217.681 144.327 213.689 129.756C208.33 110.215 195.421 93.6005 177.804 83.5674C160.186 73.5343 139.302 70.9039 119.743 76.2547Z'
                fill='#63697E'
            />
            <path
                d='M146.077 171.804C141.756 172.991 137.179 172.871 132.925 171.459C128.672 170.047 124.933 167.406 122.182 163.87C119.431 160.335 117.791 156.063 117.469 151.596C117.148 147.129 118.16 142.668 120.377 138.775C122.593 134.883 125.915 131.735 129.923 129.729C133.93 127.724 138.443 126.951 142.89 127.508C147.338 128.066 151.52 129.928 154.907 132.861C158.295 135.793 160.736 139.664 161.922 143.983C162.712 146.849 162.929 149.843 162.56 152.793C162.191 155.743 161.244 158.592 159.772 161.176C158.301 163.76 156.334 166.028 153.984 167.852C151.634 169.676 148.947 171.019 146.077 171.804ZM124.173 92.6214C112.826 95.7215 102.655 102.115 94.9457 110.993C87.2366 119.871 82.3362 130.834 80.8644 142.495C79.3926 154.156 81.4156 165.992 86.6775 176.504C91.9393 187.016 100.204 195.733 110.425 201.551C120.646 207.369 132.364 210.027 144.097 209.188C155.83 208.35 167.051 204.053 176.34 196.841C185.628 189.628 192.566 179.826 196.278 168.672C199.989 157.519 200.306 145.516 197.188 134.182C193.006 119.006 182.97 106.107 169.282 98.3149C155.593 90.5232 139.37 88.4757 124.173 92.6214Z'
                fill='#A4A9B7'
            />
            <path
                d='M146.077 171.804C141.756 172.991 137.179 172.871 132.925 171.459C128.672 170.047 124.933 167.406 122.182 163.87C119.431 160.335 117.791 156.063 117.469 151.596C117.148 147.129 118.16 142.668 120.377 138.775C122.593 134.883 125.915 131.735 129.923 129.729C133.93 127.724 138.443 126.951 142.89 127.508C147.338 128.066 151.52 129.928 154.907 132.861C158.295 135.793 160.736 139.664 161.922 143.983C162.712 146.849 162.929 149.843 162.56 152.793C162.191 155.743 161.244 158.592 159.772 161.176C158.301 163.76 156.334 166.028 153.984 167.852C151.634 169.676 148.947 171.019 146.077 171.804ZM128.091 106.337C119.454 108.713 111.715 113.594 105.854 120.364C99.9935 127.134 96.2736 135.489 95.165 144.372C94.0565 153.255 95.6091 162.267 99.6266 170.268C103.644 178.269 109.946 184.899 117.735 189.321C125.524 193.744 134.451 195.758 143.386 195.111C152.322 194.464 160.864 191.183 167.933 185.684C175.002 180.186 180.281 172.716 183.101 164.219C185.922 155.723 186.157 146.582 183.778 137.952C182.203 132.207 179.511 126.83 175.854 122.127C172.197 117.424 167.647 113.488 162.465 110.544C157.283 107.601 151.571 105.707 145.656 104.973C139.741 104.239 133.739 104.677 127.994 106.264L128.091 106.337Z'
                fill='#63697E'
            />
            <path
                d='M212.935 230.607C213.502 230.569 214.071 230.663 214.597 230.881C215.123 231.099 215.591 231.435 215.965 231.863C216.34 232.291 216.61 232.8 216.756 233.35C216.901 233.9 216.918 234.475 216.805 235.033L214.371 253.588C214.343 254.159 214.183 254.715 213.905 255.215C213.627 255.714 213.237 256.143 212.766 256.467C212.295 256.792 211.756 257.003 211.19 257.086C210.624 257.169 210.047 257.12 209.503 256.944L192.101 251.594C190.911 251.155 189.904 250.328 189.242 249.247C188.58 248.166 188.301 246.894 188.45 245.636L189.594 236.346C189.763 235.087 190.353 233.922 191.267 233.039C192.181 232.156 193.367 231.608 194.632 231.482L212.935 230.607Z'
                fill='#63697E'
            />
            <path
                d='M213.057 269.322C213.434 268.899 213.902 268.568 214.427 268.353C214.952 268.138 215.519 268.046 216.085 268.084C216.65 268.121 217.2 268.288 217.692 268.57C218.184 268.852 218.604 269.242 218.922 269.712L230.41 284.497C230.789 284.921 231.066 285.426 231.219 285.973C231.373 286.52 231.399 287.095 231.295 287.654C231.192 288.213 230.962 288.74 230.623 289.197C230.284 289.653 229.844 290.025 229.339 290.285L213.275 298.797C212.123 299.326 210.827 299.455 209.592 299.164C208.358 298.874 207.256 298.179 206.461 297.192L200.717 289.896C199.931 288.898 199.504 287.664 199.504 286.394C199.504 285.124 199.931 283.891 200.717 282.892L213.057 269.322Z'
                fill='#63697E'
            />
            <path
                d='M240.535 296.633C240.502 296.066 240.599 295.5 240.819 294.978C241.039 294.455 241.375 293.989 241.802 293.616C242.23 293.243 242.737 292.972 243.285 292.825C243.833 292.678 244.407 292.657 244.964 292.766L263.534 295.198C264.106 295.226 264.663 295.385 265.163 295.663C265.662 295.941 266.091 296.331 266.416 296.801C266.741 297.271 266.953 297.81 267.035 298.375C267.118 298.941 267.07 299.518 266.893 300.061L261.539 317.425C261.096 318.614 260.269 319.62 259.189 320.285C258.109 320.951 256.837 321.237 255.576 321.097L246.279 319.93C245.019 319.761 243.852 319.172 242.969 318.259C242.086 317.345 241.537 316.16 241.411 314.896L240.535 296.633Z'
                fill='#63697E'
            />
            <path
                d='M279.281 296.535C278.858 296.158 278.526 295.69 278.311 295.166C278.096 294.641 278.004 294.075 278.042 293.51C278.079 292.944 278.245 292.395 278.528 291.904C278.81 291.412 279.201 290.992 279.671 290.674L294.468 279.171C294.892 278.793 295.397 278.516 295.945 278.363C296.493 278.209 297.068 278.183 297.627 278.286C298.186 278.39 298.715 278.62 299.171 278.958C299.628 279.297 300 279.736 300.261 280.242L308.755 296.292C309.293 297.442 309.427 298.74 309.135 299.975C308.844 301.211 308.144 302.312 307.149 303.101L299.847 308.865C298.835 309.622 297.598 310.022 296.334 310C295.069 309.978 293.847 309.536 292.862 308.743L279.281 296.535Z'
                fill='#63697E'
            />
            <path
                d='M306.711 269.079C306.144 269.112 305.578 269.015 305.054 268.795C304.531 268.576 304.065 268.24 303.692 267.813C303.318 267.386 303.048 266.879 302.9 266.331C302.753 265.784 302.733 265.21 302.841 264.653L305.275 246.074C305.302 245.503 305.461 244.947 305.739 244.448C306.017 243.949 306.408 243.521 306.879 243.198C307.351 242.876 307.891 242.666 308.457 242.587C309.024 242.508 309.6 242.561 310.143 242.742L327.52 248.092C328.71 248.526 329.719 249.347 330.386 250.423C331.052 251.499 331.338 252.768 331.195 254.026L330.027 263.316C329.858 264.575 329.268 265.74 328.354 266.623C327.44 267.505 326.254 268.054 324.989 268.18L306.711 269.079Z'
                fill='#63697E'
            />
            <path
                d='M306.516 230.364C306.137 230.785 305.667 231.115 305.141 231.328C304.615 231.541 304.048 231.631 303.482 231.591C302.916 231.551 302.367 231.382 301.876 231.098C301.385 230.814 300.966 230.421 300.65 229.95L289.138 215.164C288.759 214.743 288.482 214.24 288.329 213.695C288.175 213.149 288.149 212.576 288.253 212.019C288.356 211.462 288.586 210.936 288.926 210.482C289.265 210.028 289.704 209.658 290.209 209.401L306.272 200.889C307.427 200.359 308.726 200.231 309.962 200.526C311.198 200.822 312.298 201.523 313.087 202.518L318.831 209.814C319.613 210.814 320.037 212.047 320.037 213.316C320.037 214.585 319.613 215.818 318.831 216.818L306.516 230.364Z'
                fill='#63697E'
            />
            <path
                d='M279.038 203.053C279.07 203.619 278.973 204.186 278.753 204.708C278.534 205.231 278.197 205.697 277.77 206.07C277.342 206.443 276.836 206.714 276.288 206.861C275.74 207.008 275.165 207.029 274.608 206.92L256.014 204.488C255.444 204.457 254.89 204.295 254.393 204.015C253.897 203.736 253.471 203.346 253.149 202.876C252.827 202.406 252.617 201.869 252.535 201.305C252.454 200.741 252.503 200.166 252.679 199.624L258.034 182.261C258.457 181.064 259.276 180.048 260.356 179.38C261.436 178.712 262.711 178.433 263.972 178.589L273.269 179.756C274.526 179.924 275.689 180.509 276.572 181.418C277.455 182.327 278.006 183.506 278.137 184.766L279.038 203.053Z'
                fill='#63697E'
            />
            <path
                d='M240.267 203.151C240.695 203.525 241.031 203.993 241.248 204.518C241.466 205.042 241.56 205.61 241.522 206.177C241.484 206.744 241.316 207.295 241.031 207.786C240.746 208.278 240.351 208.697 239.877 209.012L225.079 220.49C224.659 220.87 224.158 221.148 223.613 221.303C223.068 221.458 222.495 221.486 221.938 221.385C221.381 221.284 220.854 221.057 220.399 220.72C219.943 220.384 219.571 219.947 219.311 219.444L210.793 203.37C210.264 202.218 210.134 200.923 210.425 199.689C210.716 198.456 211.411 197.355 212.399 196.56L219.701 190.821C220.7 190.036 221.934 189.609 223.205 189.609C224.477 189.609 225.711 190.036 226.71 190.821L240.267 203.151Z'
                fill='#63697E'
            />
            <path
                d='M269.351 284.619C262.469 286.518 255.177 286.336 248.399 284.094C241.621 281.852 235.66 277.651 231.271 272.024C226.883 266.396 224.263 259.594 223.743 252.479C223.224 245.363 224.829 238.254 228.354 232.05C231.879 225.846 237.167 220.825 243.548 217.624C249.929 214.424 257.117 213.186 264.202 214.067C271.287 214.949 277.952 217.911 283.353 222.577C288.753 227.244 292.647 233.407 294.542 240.286C297.074 249.502 295.843 259.346 291.121 267.657C286.398 275.968 278.569 282.068 269.351 284.619ZM244.599 194.639C233.681 197.662 223.904 203.849 216.504 212.421C209.103 220.992 204.411 231.563 203.019 242.798C201.628 254.032 203.6 265.427 208.687 275.543C213.773 285.658 221.745 294.04 231.597 299.631C241.448 305.221 252.737 307.769 264.037 306.953C275.337 306.136 286.141 301.992 295.085 295.043C304.029 288.094 310.711 278.653 314.288 267.911C317.865 257.17 318.175 245.61 315.18 234.692C313.193 227.422 309.788 220.616 305.161 214.664C300.535 208.711 294.778 203.731 288.22 200.007C281.662 196.283 274.433 193.89 266.948 192.965C259.462 192.04 251.867 192.6 244.599 194.615V194.639Z'
                fill='#63697E'
            />
            <path
                d='M264.289 266.21C261.038 267.113 257.593 267.031 254.389 265.975C251.185 264.919 248.366 262.936 246.292 260.278C244.217 257.62 242.978 254.406 242.733 251.044C242.489 247.682 243.248 244.323 244.916 241.392C246.584 238.462 249.085 236.093 252.102 234.584C255.12 233.076 258.517 232.497 261.864 232.92C265.211 233.343 268.357 234.75 270.903 236.962C273.45 239.174 275.281 242.091 276.166 245.344C277.346 249.684 276.76 254.315 274.534 258.225C272.309 262.134 268.625 265.005 264.289 266.21ZM247.982 206.872C239.477 209.201 231.854 213.999 226.077 220.658C220.301 227.316 216.63 235.537 215.53 244.281C214.43 253.024 215.949 261.897 219.896 269.777C223.843 277.658 230.04 284.192 237.703 288.553C245.367 292.914 254.153 294.906 262.949 294.277C271.746 293.649 280.159 290.428 287.123 285.022C294.088 279.616 299.292 272.268 302.076 263.906C304.861 255.545 305.102 246.546 302.768 238.048C299.639 226.656 292.109 216.971 281.836 211.125C271.562 205.278 259.385 203.748 247.982 206.872Z'
                fill='#A4A9B7'
            />
            <path
                d='M264.288 266.21C261.038 267.112 257.592 267.031 254.388 265.975C251.184 264.919 248.366 262.936 246.291 260.278C244.216 257.62 242.978 254.406 242.733 251.044C242.488 247.682 243.248 244.322 244.916 241.392C246.584 238.462 249.085 236.092 252.102 234.584C255.12 233.076 258.517 232.497 261.864 232.92C265.211 233.343 268.357 234.75 270.903 236.962C273.449 239.173 275.281 242.091 276.166 245.344C277.346 249.684 276.76 254.315 274.534 258.225C272.309 262.134 268.625 265.005 264.288 266.21ZM250.732 217.11C244.221 218.878 238.381 222.538 233.954 227.626C229.527 232.714 226.711 239.001 225.864 245.69C225.017 252.379 226.176 259.168 229.195 265.198C232.214 271.227 236.957 276.226 242.822 279.559C248.688 282.892 255.411 284.41 262.141 283.921C268.871 283.432 275.304 280.957 280.624 276.81C285.945 272.664 289.913 267.032 292.027 260.629C294.141 254.226 294.304 247.341 292.497 240.845C290.085 232.178 284.339 224.817 276.514 220.37C268.688 215.923 259.42 214.751 250.732 217.11Z'
                fill='#63697E'
            />
        </g>
        <defs>
            <clipPath id='clip0_1_152'>
                <rect
                    width={286}
                    height={266}
                    fill='var(--center-channel-bg)'
                    transform='translate(45 55)'
                />
            </clipPath>
        </defs>
    </svg>
);

export default SvgComponent;
