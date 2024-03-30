import React from "react";
import newimg from "../image/new.svg";
import { NavLink } from "react-router-dom";
import { Element } from "react-scroll";
import Card from "./Card";
import img1 from "../image/marketing1.avif";
import img2 from "../image/markrting2.avif";
import img3 from "../image/markrting3.avif";
import img4 from "../image/markrting4.avif";
import img5 from "../image/marketing5.avif";
import img6 from '../image/marketing6.avif'
import Card2 from "../Card2";
const Services = () => {
  return (
    <Element name="services">
      <div id="services" className="container-fluid rounded p-5 border">
        <div className="container rounded  shadow-lg  mt-5  ">
          <div className="text-center  p-3  p-5">
            <img className="img-fluid" src={newimg} alt="new" />

            <h1 className="">
              <span className="gradient-text h1">Our Services. </span>
             
            </h1>
          </div>
          <hr />

          <div className="bg-ser  p-3   ">
            <div className="d-md-flex  p-5 ">
              <div className="">
                <div className="d-flex gap-3">
                  <div className="">
                    <svg
                      width="38"
                      height="41"
                      viewBox="0 0 38 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="12"
                        y="15"
                        width="26"
                        height="26"
                        rx="13"
                        fill="#C4A2FC"
                      ></rect>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.9591 22.7391C28.0542 22.6651 28.1712 22.625 28.2917 22.625H29.375C29.6742 22.625 29.9167 22.8675 29.9167 23.1667V30.75C29.9167 31.0492 29.6742 31.2917 29.375 31.2917H28.2917C28.1712 31.2917 28.0542 31.2515 27.9591 31.1776L25.6683 29.3958H21.25C20.0534 29.3958 19.0833 28.4258 19.0833 27.2292V26.6875C19.0833 25.4909 20.0534 24.5208 21.25 24.5208H25.6683L27.9591 22.7391ZM28.4775 23.7083L26.1867 25.4901C26.0916 25.564 25.9746 25.6042 25.8542 25.6042H21.25C20.6517 25.6042 20.1667 26.0892 20.1667 26.6875V27.2292C20.1667 27.8275 20.6517 28.3125 21.25 28.3125H25.8542C25.9746 28.3125 26.0916 28.3526 26.1867 28.4266L28.4775 30.2083H28.8333V23.7083H28.4775Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.8195 28.5254C20.922 28.3912 21.0812 28.3125 21.25 28.3125H23.4167C23.661 28.3125 23.875 28.476 23.9393 28.7117L24.4718 30.6645C24.7068 31.526 24.0583 32.375 23.1654 32.375H22.6831C22.0724 32.375 21.5373 31.9663 21.3766 31.3771L20.7274 28.9967C20.683 28.8338 20.7171 28.6595 20.8195 28.5254ZM21.9592 29.3958L22.4218 31.0921C22.4539 31.2099 22.561 31.2917 22.6831 31.2917H23.1654C23.344 31.2917 23.4737 31.1219 23.4267 30.9496L23.0029 29.3958H21.9592Z"
                        fill="white"
                      ></path>
                      <g clip-path="url(#clip0_1_20)">
                        <path
                          d="M2.54924 3.93007V21.4578H24.6155V24.0001H1.27563C0.571696 24.0001 0 23.4299 0 22.7279V3.93007H2.54924ZM8.2723 3.60545L8.06071 5.25698C7.99561 5.76624 7.5297 6.12535 7.01904 6.06246C6.50838 5.99753 6.14828 5.53291 6.21134 5.02366L6.75049 0.840039C6.77897 0.545847 6.94784 0.269915 7.22453 0.115718C7.47681 -0.0242772 7.76367 -0.0344218 8.01392 0.0609371L12.0544 1.61305C12.5346 1.79769 12.7726 2.33535 12.5875 2.81417C12.4023 3.29299 11.8632 3.53038 11.3831 3.34575L10.0037 2.8162C11.5153 4.86134 13.326 6.56969 15.2812 7.90065C18.0969 9.81797 21.2016 10.944 24.1333 11.155C24.648 11.1915 25.0346 11.6359 24.998 12.1492C24.9613 12.6625 24.5158 13.048 24.0011 13.0115C20.7479 12.7822 17.3177 11.5446 14.2293 9.4406C12.0077 7.92906 9.9589 5.96507 8.2723 3.60545ZM23.4985 17.3797V19.6602H20.6075V17.3797H23.4985ZM18.3309 14.9795V19.6602H15.4419V14.9795H18.3309ZM13.1653 13.328V19.6602H10.2763V13.328H13.1653ZM7.99967 10.8121V19.6602H5.10864V10.8121H7.99967Z"
                          fill="#151A6A"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_20">
                          <rect width="25" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <h6 className="service_h3">Strategic Marketing </h6>
                    <p className="service_p">
                      Catapult your brand into the spotlight with our genius
                      strategies – it's like magic, but for marketing.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3 ">
                  <div className="">
                    <svg
                      class="w-1em"
                      xmlns="http://www.w3.org/2000/svg"
                      width="34.394"
                      height="34.394"
                      viewBox="0 0 34.394 34.394"
                    >
                      <g transform="translate(-1 -1)">
                        <g transform="translate(9.876 9.876)">
                          <path
                            d="M40.3,30.65a.555.555,0,0,0-.555-.555A10.552,10.552,0,0,1,29.2,19.555a.555.555,0,1,0-1.11,0A10.552,10.552,0,0,1,17.555,30.1a.555.555,0,0,0,0,1.11A10.552,10.552,0,0,1,28.1,41.745a.555.555,0,0,0,1.11,0A10.552,10.552,0,0,1,39.745,31.2a.555.555,0,0,0,.555-.555Z"
                            transform="translate(-17 -17.89)"
                            fill="#c4a2fc"
                          ></path>
                          <path
                            d="M55.321,50.883a3.332,3.332,0,0,1-3.329-3.329.555.555,0,1,0-1.109,0,3.332,3.332,0,0,1-3.328,3.329.555.555,0,1,0,0,1.109,3.332,3.332,0,0,1,3.328,3.329.555.555,0,0,0,1.109,0,3.332,3.332,0,0,1,3.329-3.329.555.555,0,1,0,0-1.11Z"
                            transform="translate(-30.357 -30.357)"
                            fill="#c4a2fc"
                          ></path>
                          <path
                            d="M47.555,21.993a3.332,3.332,0,0,1,3.329,3.329.555.555,0,1,0,1.109,0,3.332,3.332,0,0,1,3.329-3.328.555.555,0,1,0,0-1.11,3.332,3.332,0,0,1-3.329-3.329.555.555,0,1,0-1.109,0,3.332,3.332,0,0,1-3.328,3.329.555.555,0,1,0,0,1.11Z"
                            transform="translate(-30.357 -17)"
                            fill="#c4a2fc"
                          ></path>
                        </g>
                        <path
                          d="M24.42,25.955a11.76,11.76,0,0,0-8.459-9.02,6.936,6.936,0,0,0,3.9-6.226V7.934a6.934,6.934,0,1,0-13.869,0v2.774a6.936,6.936,0,0,0,3.9,6.226,11.76,11.76,0,0,0-8.459,9.02l-.424,2.119a.555.555,0,0,0,.544.664H24.3a.555.555,0,0,0,.544-.664ZM7.1,7.934a5.822,5.822,0,1,1,11.642-.159,10.644,10.644,0,0,1-3.459-2.594.573.573,0,0,0-.833,0A10.537,10.537,0,0,1,7.1,8.737Zm0,2.774v-.86a11.642,11.642,0,0,0,7.767-3.485,11.732,11.732,0,0,0,3.883,2.628v1.717a5.825,5.825,0,0,1-11.65,0ZM2.231,27.628l.291-1.456a10.611,10.611,0,0,1,20.809,0l.291,1.456Z"
                          transform="translate(0 0)"
                          fill="#151a6a"
                        ></path>
                        <path
                          d="M13.578,38.186l-2.544,2.862-1.065-1.2a.555.555,0,1,0-.829.737l1.479,1.664a.555.555,0,0,0,.829,0l2.959-3.328a.555.555,0,1,0-.829-.737Z"
                          transform="translate(-3.562 -16.474)"
                          fill="#151a6a"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h6 className="service_h3">Social Media Management </h6>
                    <p className="service_p">
                      Hands-free social success! While you focus on your cat
                      videos, we'll make sure your brand shines across all
                      social platforms.
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-3 ">
                  <div className="">
                    <svg
                      class="w-1em"
                      xmlns="http://www.w3.org/2000/svg"
                      width="36.836"
                      height="37.439"
                      viewBox="0 0 36.836 37.439"
                    >
                      <g transform="translate(-1.5 -1.001)">
                        <path
                          d="M41.429,40.95a1.211,1.211,0,0,0,0,2.356,1.211,1.211,0,0,0,0-2.356Z"
                          transform="translate(-15.449 -15.826)"
                          fill="#c4a2fc"
                        ></path>
                        <ellipse
                          cx="0.929"
                          cy="1.178"
                          rx="0.929"
                          ry="1.178"
                          transform="translate(31.646 30.016)"
                          fill="#c4a2fc"
                        ></ellipse>
                        <path
                          d="M45.635,31H26.312A1.814,1.814,0,0,0,24.5,32.812v5.435a.6.6,0,0,0,.6.6,1.812,1.812,0,1,1,0,3.623.6.6,0,0,0-.6.6v5.435a1.814,1.814,0,0,0,1.812,1.812H45.635a1.814,1.814,0,0,0,1.812-1.812V43.077a.6.6,0,0,0-.6-.6,1.812,1.812,0,0,1,0-3.623.6.6,0,0,0,.6-.6V32.812A1.814,1.814,0,0,0,45.635,31ZM31.142,48.512a.6.6,0,0,1-1.208,0V47.3a.6.6,0,0,1,1.208,0Zm0-3.623a.6.6,0,0,1-1.208,0V43.681a.6.6,0,0,1,1.208,0Zm0-3.623a.6.6,0,1,1-1.208,0V40.058a.6.6,0,0,1,1.208,0Zm0-3.623a.6.6,0,0,1-1.208,0V36.435a.6.6,0,1,1,1.208,0Zm0-3.623a.6.6,0,0,1-1.208,0V32.812a.6.6,0,0,1,1.208,0Zm1.812,4.167A2.275,2.275,0,0,1,35.091,35.8a2.4,2.4,0,0,1,0,4.771,2.274,2.274,0,0,1-2.137-2.385Zm3.39,7.043a.6.6,0,0,1-.323-.79l3.47-8.269a.6.6,0,0,1,1.113.467l-3.47,8.269A.6.6,0,0,1,36.344,45.23Zm5.343.232a2.4,2.4,0,1,1,2.137-2.385,2.274,2.274,0,0,1-2.137,2.385Z"
                          transform="translate(-9.111 -11.884)"
                          fill="#c4a2fc"
                        ></path>
                        <g transform="translate(1.5 1.001)">
                          <path
                            d="M3.915,26.967H22.031a2.418,2.418,0,0,0,2.415-2.415V1.6a.6.6,0,0,0-.939-.5l-1.477.984L20.555,1.1a.6.6,0,0,0-.67,0l-1.477.984L16.931,1.1a.6.6,0,0,0-.67,0l-1.477.984L13.308,1.1a.6.6,0,0,0-.67,0l-1.477.984L9.685,1.1a.6.6,0,0,0-.67,0l-1.477.984L6.062,1.1a.6.6,0,0,0-.939.5V18.794l-1.208.8-1.477-.984a.6.6,0,0,0-.939.5v5.435a2.418,2.418,0,0,0,2.415,2.415Zm2.415-2.415V2.733l.873.582a.6.6,0,0,0,.67,0L9.35,2.331l1.477.984a.6.6,0,0,0,.67,0l1.477-.984,1.477.984a.6.6,0,0,0,.67,0L16.6,2.331l1.477.984a.6.6,0,0,0,.67,0l1.477-.984,1.477.984a.6.6,0,0,0,.67,0l.873-.582V24.552a1.209,1.209,0,0,1-1.208,1.208H6.007a2.4,2.4,0,0,0,.324-1.208ZM2.708,20.245l.873.582a.6.6,0,0,0,.67,0l.873-.582v4.307a1.208,1.208,0,1,1-2.415,0Z"
                            transform="translate(-1.5 -1.001)"
                            fill="#151a6a"
                          ></path>
                          <path
                            d="M17.1,10.209H24.35A.6.6,0,0,0,24.35,9H17.1a.6.6,0,0,0,0,1.208Z"
                            transform="translate(-7.442 -4.17)"
                            fill="#151a6a"
                          ></path>
                          <path
                            d="M14.1,16.209h5.435a.6.6,0,0,0,0-1.208H14.1a.6.6,0,1,0,0,1.208Z"
                            transform="translate(-6.254 -6.547)"
                            fill="#151a6a"
                          ></path>
                          <path
                            d="M30.915,15H29.1a.6.6,0,1,0,0,1.208h1.812a.6.6,0,1,0,0-1.208Z"
                            transform="translate(-12.196 -6.547)"
                            fill="#151a6a"
                          ></path>
                          <path
                            d="M14.1,22.209h5.435a.6.6,0,0,0,0-1.208H14.1a.6.6,0,0,0,0,1.208Z"
                            transform="translate(-6.254 -8.924)"
                            fill="#151a6a"
                          ></path>
                          <path
                            d="M30.915,21H29.1a.6.6,0,0,0,0,1.208h1.812a.6.6,0,1,0,0-1.208Z"
                            transform="translate(-12.196 -8.924)"
                            fill="#151a6a"
                          ></path>
                          <path
                            d="M20.142,27.605a.6.6,0,0,0-.6-.6H14.1a.6.6,0,1,0,0,1.208h5.435a.6.6,0,0,0,.6-.6Z"
                            transform="translate(-6.254 -11.301)"
                            fill="#151a6a"
                          ></path>
                          <path
                            d="M30.915,27H29.1a.6.6,0,1,0,0,1.208h1.812a.6.6,0,1,0,0-1.208Z"
                            transform="translate(-12.196 -11.301)"
                            fill="#151a6a"
                          ></path>
                          <path
                            d="M23.935,36H19.1a.6.6,0,1,0,0,1.208h4.831a.6.6,0,0,0,0-1.208Z"
                            transform="translate(-8.234 -14.866)"
                            fill="#151a6a"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h6 className="service_h3">
                      Search Engine Optimization (SEO){" "}
                    </h6>
                    <p className="service_p">
                      Boost your online swagger! We'll spruce up your website so
                      Google has no choice but to be your biggest fan.
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="d-flex gap-3">
                  <div className="">
                    <svg
                      class="w-1em"
                      xmlns="http://www.w3.org/2000/svg"
                      width="36.993"
                      height="36.99"
                      viewBox="0 0 36.993 36.99"
                    >
                      <g transform="translate(-1 -1.005)">
                        <path
                          d="M33.53,21A12.53,12.53,0,1,0,46.06,33.53,12.53,12.53,0,0,0,33.53,21Zm4.785,13.094-7.928,4.324a.6.6,0,0,1-.882-.524V29.246a.6.6,0,0,1,.882-.524l7.928,4.325a.6.6,0,0,1,0,1.048Z"
                          transform="translate(-8.067 -8.065)"
                          fill="#c4a2fc"
                        ></path>
                        <g transform="translate(1 1.005)">
                          <path
                            d="M19.205,1.241,8.578,7.315l-5.934.495A1.8,1.8,0,0,0,1,9.594v6.157a1.8,1.8,0,0,0,1.641,1.783l5.923.494,10.586,6.552a1.79,1.79,0,0,0,2.732-1.521V2.792a1.79,1.79,0,0,0-2.678-1.551ZM2.193,15.75V9.594A.6.6,0,0,1,2.74,9l5.419-.45V16.8L2.74,16.344A.6.6,0,0,1,2.193,15.75Zm18.5,7.309a.6.6,0,0,1-.91.507L9.353,17.112V8.245L19.795,2.278a.6.6,0,0,1,.895.514Z"
                            transform="translate(-1 -1.005)"
                            fill="#151a6a"
                          ></path>
                          <path
                            d="M39.33,14.6a.6.6,0,0,0-.267.8,5.747,5.747,0,0,1,0,5.456.6.6,0,0,0,1.068.534,6.963,6.963,0,0,0,0-6.524A.6.6,0,0,0,39.33,14.6Z"
                            transform="translate(-16.327 -6.463)"
                            fill="#151a6a"
                          ></path>
                          <path
                            d="M45.936,11.1a.6.6,0,1,0-1.067.533,10.484,10.484,0,0,1,0,9.949.6.6,0,1,0,1.067.533,11.754,11.754,0,0,0,0-11.015Z"
                            transform="translate(-18.669 -4.945)"
                            fill="#151a6a"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h6 className="service_h3">Creative Design </h6>
                    <p className="service_p">
                      Picture-perfect branding and graphics – we make your
                      competitors jealous, and your audience adore you.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <div className="">
                    <svg
                      class="w-1em"
                      xmlns="http://www.w3.org/2000/svg"
                      width="36.897"
                      height="39.442"
                      viewBox="0 0 36.897 39.442"
                    >
                      <g transform="translate(-5 -1)">
                        <path
                          d="M37.984,34.1c-3.391-8.136-15.5-5.961-15.9,2.805a7,7,0,0,0,1.908,13.735h14a8.27,8.27,0,1,0,0-16.54Zm-2.093,6.177L30.8,45.365a.636.636,0,0,1-.9,0l-2.545-2.545a.639.639,0,0,1,.9-.9l2.093,2.1,4.638-4.644a.639.639,0,0,1,.9.9Z"
                          transform="translate(-4.357 -10.198)"
                          fill="#c4a2fc"
                        ></path>
                        <path
                          d="M22.176,1H6.908A1.908,1.908,0,0,0,5,2.908V30.9a1.908,1.908,0,0,0,1.908,1.908H22.176A1.908,1.908,0,0,0,24.085,30.9V2.908A1.908,1.908,0,0,0,22.176,1ZM18.359,8.634a2.545,2.545,0,0,0-2.545,2.545v7a1.272,1.272,0,1,1-2.545,0V16.268a2.545,2.545,0,1,0-5.089,0v3.817a1.272,1.272,0,0,1-1.272,1.272H6.272V6.089h16.54v7.634h-.636A1.272,1.272,0,0,1,20.9,12.451V11.178A2.545,2.545,0,0,0,18.359,8.634Zm-12.087,14h.636a2.545,2.545,0,0,0,2.545-2.545V16.268a1.272,1.272,0,1,1,2.545,0v1.908a2.545,2.545,0,1,0,5.089,0v-7a1.272,1.272,0,1,1,2.545,0v1.272A2.545,2.545,0,0,0,22.176,15h.636V26.446H6.272ZM6.908,2.272H22.176a.636.636,0,0,1,.636.636V4.817H6.272V2.908A.636.636,0,0,1,6.908,2.272ZM22.176,31.535H6.908a.636.636,0,0,1-.636-.636V27.718h16.54V30.9A.636.636,0,0,1,22.176,31.535ZM20.9,25.174H17.087a.636.636,0,1,1,0-1.272H20.9a.636.636,0,1,1,0,1.272Zm0-2.545H18.359a.636.636,0,0,1,0-1.272H20.9a.636.636,0,1,1,0,1.272ZM12,9.906H9.453a.636.636,0,1,1,0-1.272H12a.636.636,0,0,1,0,1.272Zm5.089,20.357H12a.636.636,0,0,1,0-1.272h5.089a.636.636,0,0,1,0,1.272Z"
                          transform="translate(0)"
                          fill="#151a6a"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h6 className="service_h3">Technical Solutions </h6>
                    <p className="service_p">
                      From tech wizardry to seamless online experiences, we turn
                      digital hiccups into high-fives for your users.
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <div className="">
                    <svg
                      class="w-1em"
                      xmlns="http://www.w3.org/2000/svg"
                      width="36.993"
                      height="36.396"
                      viewBox="0 0 36.993 36.396"
                    >
                      <g transform="translate(-1 -2)">
                        <path
                          d="M33.53,21A12.53,12.53,0,1,0,46.06,33.53,12.53,12.53,0,0,0,33.53,21Zm5.483,18.013a7.757,7.757,0,0,1-13.126-4.218l-.286.286a.6.6,0,1,1-.847-.841l1.193-1.193a.6.6,0,0,1,.847,0l1.193,1.193a.6.6,0,0,1-.823.859,6.563,6.563,0,0,0,11.008,3.073.6.6,0,0,1,.841.841Zm3.294-6.253-1.193,1.193a.6.6,0,0,1-.847,0L39.073,32.76a.6.6,0,0,1,.805-.871,6.563,6.563,0,0,0-10.99-2.983.6.6,0,0,1-.841-.841,7.757,7.757,0,0,1,13.126,4.177l.292-.3a.6.6,0,0,1,.841.817Z"
                          transform="translate(-8.067 -7.664)"
                          fill="#c4a2fc"
                        ></path>
                        <path
                          d="M30.833,3.79A1.79,1.79,0,0,0,29.043,2H2.79A1.79,1.79,0,0,0,1,3.79V8.563a1.79,1.79,0,0,0,.465,1.193A1.79,1.79,0,0,0,1,10.95v4.773a1.79,1.79,0,0,0,.465,1.193A1.79,1.79,0,0,0,1,18.11v4.773a1.79,1.79,0,0,0,1.79,1.79H29.043a1.79,1.79,0,0,0,1.79-1.79V18.11a1.79,1.79,0,0,0-.465-1.193,1.79,1.79,0,0,0,.465-1.193V10.95a1.79,1.79,0,0,0-.465-1.193,1.79,1.79,0,0,0,.465-1.193Zm-28.639,0a.6.6,0,0,1,.6-.6H29.043a.6.6,0,0,1,.6.6V8.563a.6.6,0,0,1-.6.6H2.79a.6.6,0,0,1-.6-.6ZM29.639,15.723a.6.6,0,0,1-.6.6H2.79a.6.6,0,0,1-.6-.6V10.95a.6.6,0,0,1,.6-.6H29.043a.6.6,0,0,1,.6.6Zm0,7.16a.6.6,0,0,1-.6.6H2.79a.6.6,0,0,1-.6-.6V18.11a.6.6,0,0,1,.6-.6H29.043a.6.6,0,0,1,.6.6ZM6.37,5.58H18.3a.6.6,0,0,1,0,1.193H6.37a.6.6,0,0,1,0-1.193Zm18.5,1.193V5.58a.6.6,0,1,1,1.193,0V6.773a.6.6,0,1,1-1.193,0Zm-2.387,0V5.58a.6.6,0,0,1,1.193,0V6.773a.6.6,0,0,1-1.193,0ZM18.3,13.933H6.37a.6.6,0,0,1,0-1.193H18.3a.6.6,0,0,1,0,1.193ZM26.06,12.74v1.193a.6.6,0,1,1-1.193,0V12.74a.6.6,0,1,1,1.193,0Zm-2.387,0v1.193a.6.6,0,0,1-1.193,0V12.74a.6.6,0,0,1,1.193,0ZM18.3,21.093H6.37a.6.6,0,0,1,0-1.193H18.3a.6.6,0,0,1,0,1.193ZM26.06,19.9v1.193a.6.6,0,1,1-1.193,0V19.9a.6.6,0,1,1,1.193,0Zm-2.387,0v1.193a.6.6,0,1,1-1.193,0V19.9a.6.6,0,0,1,1.193,0Z"
                          transform="translate(0 0)"
                          fill="#151a6a"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h6 className="service_h3">Automation Services </h6>
                    <p className="service_p">
                      Automagically enhance efficiency! Our automation tricks
                      make your processes smoother than a freshly buttered
                      slide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pb-5">
              {" "}
              <button className="bg-white rounded border-0 shadow p-3">
                Want to discuss
                <NavLink className={"text-black"}>
                  {" "}
                  Let's Schedule a Call
                </NavLink>
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="container shadow-lg  rounded bg-white my-3   ">
          <div className=" rounded ">
            <Card
              title="Strategic Marketing"
              dec="Ready to give your brand the spotlight it deserves? Dive into our Paid Ads extravaganza and let your message shine in the digital universe!"
              img={img1}
            />
          </div>
        </div>
        <div className="container shadow-lg p-3 rounded bg-white my-5  ">
          <div className=" rounded">
            <Card2
              title="Eye-catchy Designs"
              dec="We craft visuals that speak to your ideal customers. Ready for an extraordinary brand transformation?"
              img={img2}
            ></Card2>
          </div>
        </div>
        <div className="container shadow-lg rounded bg-white my-5  ">
          <div className=" rounded">
            <Card
              title="Social Media"
              dec="Ready to make your brand the talk of the social town? Dive into our Social Media Management expertise and let your brand resonate across digital platforms!"
              img={img3}
            />
          </div>
        </div>
        <div className="container shadow-lg rounded bg-white my-5  ">
          <div className=" rounded">
            <Card2
              title="Social Media"
              dec="Ready to make your brand the talk of the social town? Dive into our Social Media Management expertise and let your brand resonate across digital platforms!"
              img={img4}
            />
          </div>
        </div>
        <div className="container shadow-lg  rounded bg-white my-5  ">
          <div className=" rounded">
            <Card
              title="Web Development"
              dec="From tech wizardry to seamless online experiences – enter the world of Technical Solutions. We transform digital hiccups into high-fives for your users."
              img={img5}
            />
          </div>
        </div>

        <div className="container shadow-lg  rounded bg-white my-5  ">
        <div className=" rounded">
          <Card
            title="Robust SEO"
            dec="Elevate your online presence, automate workflows, and define digital brilliance with hassle-free SEO"
            img={img6}
          />
        </div>
      </div>
      </div>
    </Element>
  );
};

export default Services;
