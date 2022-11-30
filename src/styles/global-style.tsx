import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const styled = { createGlobalStyle }

export const GlobalStyle = styled.createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
  }

  main {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .text-bold {
    font-weight: bold;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 36px;
  }

  h3 {
    font-size: 30px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 20px;
  }

  p,
  h6,
  .text-default {
    font-size: 16px;
    font-weight: 400;
  }

  .text-span {
    font-size: 12px;
  }

  .text-large {
    font-size: 50px;
  }

  .nav--solution[data-icon='down'] {
    a {
      .icon--chevron-down {
        display: block;
      }

      .icon--chevron-up {
        display: none;
      }
    }
  }

  .nav--solution[data-icon='up'] {
    a {
      .icon--chevron-down {
        display: none;
      }

      .icon--chevron-up {
        display: block;
      }
    }
  }

  ul[data-hidden='true'] {
    display: none;
  }

  ul[data-hidden='false'] {
    display: flex;
  }

  .icon--arrow-right {
    margin-left: 4px;
    font-size: 28px;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 0.375rem;
  }

  .form-control::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  .form-control:-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  .form-control::-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  /* policy, terms */
  .clause {
    padding: 20px 0 20px 0;
    line-height: 30px;
  }

  .clause p {
    margin: 10px 0 0 0;
  }

  .article {
    padding: 30px 0 30px 0;
  }

  .article .policy-title {
    font-size: 20px;
  }

  .article span:nth-child(2) {
    line-height: 40px;
  }

  .article ol {
    line-height: 30px;
  }

  .summary {
    max-width: 840px;
    margin: 0 auto;
  }

  .summary-text {
    line-height: 30px;
  }

  .layout-context {
    max-width: 840px;
    margin: 0 auto;
  }

  .sub-text {
    padding: 30px 0 0 30px;
  }

  h4 {
    margin: 30px 0 0 0;
  }

  .sub-list li {
    margin: 0 0 0 10px;
  }

  .sub-list ol {
    margin: 20px 0 20px 10px;
  }

  .clause ol {
    margin: 20px 0 20px 10px;
  }
  /****************/

  /* 개인정보 처리방침 */
  .table {
    width: 100%;
    border-top: 1px solid #dedede;
  }

  .table th {
    padding: 10px 5px;
    font-size: 16px;
    text-align: center;
    color: #252525;
    background-color: #f9fbfc;
    vertical-align: middle;
    border-bottom: 1px solid #dedede;
  }

  .table th.width-s {
    max-width: 120px;
  }

  .table th.width-ss {
    max-width: 100px;
  }

  .table th .th-text {
    display: inline-flex;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    -ms-flex-pack: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
  }

  .table th .sort {
    position: relative;
    margin-left: 2px;
    width: 18px;
    min-width: 18px;
    height: 28px;
    background: url(../images/ic_sort_none.svg) no-repeat center/contain;
  }

  .table th .sort .none {
    position: absolute !important;
    width: 1px;
    height: 1px;
    font-size: 0;
    text-indent: -10000px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
  }

  .table th .sort .text {
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translateX(-50%);
    padding: 2px 6px;
    font-size: 11px;
    color: #fff;
    white-space: nowrap;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 1;
    transition: all 0.2s ease-in;
    animation-name: ani-sort;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .table th .sort.ascend {
    background-image: url(../images/ic_sort_ascend.svg);
    opacity: 1;
  }

  .table th .sort.descend {
    background-image: url(../images/ic_sort_descend.svg);
  }

  .table tr.added td {
    background-color: #dedede;
  }

  .table td {
    padding: 10px 5px;
    min-width: 60px;
    text-align: center;
    vertical-align: middle;
    border-bottom: 1px solid #dedede;
    background-color: #fff;
  }

  .table td.dark {
    color: #252525;
  }

  .table td.light {
    color: #9e9e9e;
  }

  .table td.left {
    text-align: left;
  }

  .table td.small {
    font-size: 12px;
  }

  .table td .link {
    font-weight: 700;
  }

  .table td .link:hover {
    opacity: 0.7;
  }

  .table td.boardtitle {
    width: 55%;
    text-align: left;
  }

  .table td.boardtitle .link {
    display: inline-block;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .table td .color-on {
    color: #00a1e9;
  }

  .table td .color-off {
    color: #ee9e00;
  }

  .table td .status {
    padding: 6px 10px 6px;
    font-size: 12px;
    color: #9e9e9e;
    border: 1px solid #dedede;
  }

  .table td .status.end {
    color: #00a1e9;
    border-color: #00a1e9;
  }

  .table.pay th {
    padding: 5px 2px;
  }

  .table.pay td {
    padding: 3px 2px;
  }

  .table.paylist th {
    padding: 8px 3px;
  }

  .table.paylist td {
    padding: 7px 3px;
  }

  .table.small th {
    padding: 8px 3px;
    font-size: 12px;
  }

  .table.small td {
    padding: 8px 3px;
  }

  .table.scroll {
    position: relative;
  }

  .table.scroll thead {
    float: left;
    width: 100%;
  }

  .table.scroll thead tr {
    display: table;
    width: 100%;
  }

  .table.scroll thead tr.added td {
    background-color: red;
  }

  .table.scroll tbody {
    float: left;
    width: 100%;
    max-height: 70vh;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .table.scroll tbody tr {
    display: table;
    width: 100%;
  }

  .table.small.scroll tbody {
    max-height: 180px;
  }

  .table.material-width tr td,
  .table.material-width tr th {
    width: 18%;
  }

  .table.material-width tr td:first-child,
  .table.material-width tr th:first-child {
    width: 92px;
  }

  .table.material-width tr td:nth-child(2),
  .table.material-width tr th:nth-child(2) {
    width: 25%;
  }

  .table.material-width tr td:last-child,
  .table.material-width tr th:last-child {
    width: 287px;
  }

  button {
    width: 200px;
    height: 60px;
    border: 1px solid black;
    border-radius: 4px;
    background: none;
    cursor: pointer;
    padding: 0;
    margin: 0;

    font-size: 2rem;
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1;
  }

  @media (hover: hover) {
    .ScrollTopBtn:hover {
      opacity: 1;
    }
  }

  a {
    color: black;
    text-decoration: none;
    font-size: 0.875rem;
    cursor: pointer;
  }

  /****************/

  @media screen and (max-width: 700px) {
    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 36px;
    }

    h3 {
      font-size: 24px;
    }

    h4 {
      font-size: 20px;
    }

    h5 {
      font-size: 16px;
    }

    h6 {
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }

    .text-default {
      font-size: 16px;
    }

    .text-span {
      font-size: 12px;
    }

    .text-large {
      font-size: 40px;
    }

    .clause {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 400px) {
    h1 {
      font-size: 26px;
    }

    h2 {
      font-size: 26px;
    }

    h3 {
      font-size: 20px;
    }

    h4 {
      font-size: 16px;
    }

    h5 {
      font-size: 12px;
    }

    h6 {
      font-size: 12px;
    }

    p {
      font-size: 14px;
    }

    .text-default {
      font-size: 16px;
    }

    .text-span {
      font-size: 12px;
    }

    .text-large {
      font-size: 20px;
    }

    .clause {
      font-size: 14px;
    }
  }
`
