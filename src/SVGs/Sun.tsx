

const Sun = () =>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="220px" width="220px" version="1.1" id="Capa_1" viewBox="0 0 200 200" xmlSpace="preserve">
                    <g id='outer_sun'
                    className={`origin-center animate-reverseSpin`}
                    >
                        {/* <path fill="#FCDD66"  d="M 120.3681 191.2404 l -31.3521 -35.5311 c -0.681 -0.7702 -0.6076 -1.9478 0.1642 -2.6276 c 0.7702 -0.681 1.9479 -0.6084 2.6276 0.1642 l 26.8956 30.4789 l 11.9215 -40.3984 l 42.0403 2.6147 l -19.4428 -35.6981 c -0.4917 -0.9035 -0.1591 -2.0336 0.7453 -2.5251 c 0.9028 -0.4927 2.0343 -0.158 2.5244 0.7443 l 22.666 41.6147 l -45.8022 -2.849 L 120.3681 191.2404 z 
                        M 44.9639 91.8655 c -0.5395 -0.0951 -1.0314 -0.4249 -1.3129 -0.943 L 20.9861 49.3071 l 45.8013 2.8489 L 79.7752 8.1424 l 31.353 35.5312 c 0.6808 0.771 0.6066 1.9485 -0.1642 2.6276 c -0.7702 0.681 -1.9472 0.6095 -2.6276 -0.1642 L 81.4408 15.6583 l -11.9207 40.3993 L 27.4789 53.4428 l 19.4419 35.6981 c 0.4925 0.9037 0.1589 2.0345 -0.7444 2.5253 C 45.7921 91.8755 45.3647 91.9362 44.9639 91.8655 z 
                        M 154.5326 111.1854 c -0.4007 -0.0707 -0.7811 -0.272 -1.0712 -0.6021 c -0.6819 -0.7703 -0.6076 -1.9478 0.1633 -2.6278 l 30.4797 -26.8955 l -40.3993 -11.9207 l 2.6147 -42.0403 l -35.6981 19.4419 c -0.9037 0.4925 -2.0362 0.1586 -2.5253 -0.7444 c -0.4927 -0.9028 -0.1591 -2.0336 0.7444 -2.5253 L 150.4556 20.6053 l -2.8489 45.8013 l 44.0144 12.9881 l -35.5321 31.3528 C 155.6481 111.1382 155.0729 111.2807 154.5326 111.1854 z 
                        M 49.6877 178.7775 l 2.8497 -45.8012 L 8.523 119.9883 l 35.5312 -31.353 c 0.77 -0.6801 1.9481 -0.6093 2.6276 0.1642 c 0.6808 0.771 0.6076 1.9478 -0.1642 2.6276 L 16.0389 118.3227 l 40.4 11.9217 l -2.6163 42.0391 l 35.6981 -19.4419 c 0.9028 -0.4927 2.0345 -0.1589 2.5253 0.7444 c 0.4925 0.9037 0.1589 2.0345 -0.7444 2.5253 L 49.6877 178.7775 z">
                        </path> */}

                        <g id="br">
                            <path fill="#FCDD66" 
                            d="M 120.3681 191.2404 l -31.3521 -35.5311 c -0.681 -0.7702 -0.6076 -1.9478 0.1642 -2.6276 c 0.7702 -0.681 1.9479 -0.6084 2.6276 0.1642 l 26.8956 30.4789 l 11.9215 -40.3984 l 42.0403 2.6147 l -19.4428 -35.6981 c -0.4917 -0.9035 -0.1591 -2.0336 0.7453 -2.5251 c 0.9028 -0.4927 2.0343 -0.158 2.5244 0.7443 l 22.666 41.6147 l -45.8022 -2.849 L 120.3681 191.2404 z "
                            />
                        </g>
                        <g id="tl">
                            <path fill="#FCDD66" 
                            d="M 44.9639 91.8655 c -0.5395 -0.0951 -1.0314 -0.4249 -1.3129 -0.943 L 20.9861 49.3071 l 45.8013 2.8489 L 79.7752 8.1424 l 31.353 35.5312 c 0.6808 0.771 0.6066 1.9485 -0.1642 2.6276 c -0.7702 0.681 -1.9472 0.6095 -2.6276 -0.1642 L 81.4408 15.6583 l -11.9207 40.3993 L 27.4789 53.4428 l 19.4419 35.6981 c 0.4925 0.9037 0.1589 2.0345 -0.7444 2.5253 C 45.7921 91.8755 45.3647 91.9362 44.9639 91.8655 z " 
                        />
                        </g>
                        <g id="tr">
                            <path fill="#FDE8A2" 
                            d="M 154.5326 111.1854 c -0.4007 -0.0707 -0.7811 -0.272 -1.0712 -0.6021 c -0.6819 -0.7703 -0.6076 -1.9478 0.1633 -2.6278 l 30.4797 -26.8955 l -40.3993 -11.9207 l 2.6147 -42.0403 l -35.6981 19.4419 c -0.9037 0.4925 -2.0362 0.1586 -2.5253 -0.7444 c -0.4927 -0.9028 -0.1591 -2.0336 0.7444 -2.5253 L 150.4556 20.6053 l -2.8489 45.8013 l 44.0144 12.9881 l -35.5321 31.3528 C 155.6481 111.1382 155.0729 111.2807 154.5326 111.1854 z " 
                             />
                        </g>
                        <g id="bl">
                            <path fill="#FDE8A2" 
                            d="M 49.6877 178.7775 l 2.8497 -45.8012 L 8.523 119.9883 l 35.5312 -31.353 c 0.77 -0.6801 1.9481 -0.6093 2.6276 0.1642 c 0.6808 0.771 0.6076 1.9478 -0.1642 2.6276 L 16.0389 118.3227 l 40.4 11.9217 l -2.6163 42.0391 l 35.6981 -19.4419 c 0.9028 -0.4927 2.0345 -0.1589 2.5253 0.7444 c 0.4925 0.9037 0.1589 2.0345 -0.7444 2.5253 L 49.6877 178.7775 z" 
                              />
                        </g>
                    </g>
                    <g id="mid_sun" >
                        <path fill="#FCDD66" d="
                        M8.258,102.427c-0.817,0-1.597-0.467-1.96-1.256c-0.497-1.081-0.024-2.361,1.058-2.858       
                        l41.802-19.215L31.544,31.544l47.553,17.615L98.312,7.356c0.497-1.08,1.776-1.556,2.858-1.058       
                        c1.082,0.496,1.556,1.777,1.058,2.857L81.345,54.59L38.846,38.845l15.744,42.501L9.156,102.229       
                        C8.865,102.363,8.559,102.427,8.258,102.427z" />
                        <path fill="#FCDD66" d="
                        M100.269,194.44c-0.3,0-0.607-0.063-0.898-0.197c-1.082-0.497-1.556-1.777-1.059-2.858       
                        l20.884-45.433l42.499,15.744l-15.744-42.5l45.434-20.884c1.082-0.498,2.361-0.022,2.857,1.059       
                        c0.498,1.08,0.023,2.361-1.059,2.857l-41.801,19.215l17.613,47.554l-47.552-17.615l-19.215,41.803       
                        C101.866,193.975,101.085,194.44,100.269,194.44z" />
                        <path fill="#FDE8A2" d="
                        M100.272,194.44c-0.816,0-1.597-0.466-1.96-1.256l-19.215-41.803l-47.554,17.614l17.615-47.553   
                            L7.357,102.229c-1.082-0.496-1.556-1.777-1.058-2.857c0.497-1.081,1.775-1.557,2.858-1.059l45.433,20.884l-15.745,42.499  
                                 l42.5-15.743l20.883,45.433c0.498,1.081,0.024,2.361-1.058,2.858C100.879,194.377,100.573,194.44,100.272,194.44z" />
                        <path fill="#FDE8A2" d="
                        M192.283,102.427c-0.301,0-0.607-0.064-0.898-0.198l-45.434-20.883l15.744-42.5L119.196,54.59    
                           L98.312,9.156c-0.497-1.08-0.023-2.361,1.059-2.857c1.084-0.497,2.362-0.022,2.858,1.058l19.215,41.803l47.554-17.614  
                                l-17.615,47.553l41.801,19.215c1.082,0.497,1.557,1.777,1.059,2.858C193.879,101.96,193.098,102.427,192.283,102.427z" />
                    </g>
                    <g id="sun_inner"
                        className={`origin-center animate-spin`}
                    >
                        <path fill="#FCDD66" d="
                        M133.316,180.05l-34.639-38.001c-0.802-0.88-0.739-2.244,0.14-3.045       
                        c0.881-0.801,2.244-0.738,3.045,0.141l26.597,29.18l-1.927-41.791l41.792,1.927l-29.18-26.597       
                        c-0.879-0.801-0.942-2.165-0.141-3.045c0.802-0.879,2.164-0.941,3.045-0.141l38.001,34.639l-48.992-2.259L133.316,180.05z" />
                        <path fill="#FCDD66" d="
                        M59.944,102.426c-0.518,0-1.038-0.186-1.452-0.563L20.491,67.225l48.992,2.259l-2.259-48.992       
                        l34.639,38.001c0.801,0.88,0.738,2.244-0.141,3.046c-0.88,0.802-2.244,0.738-3.045-0.141l-26.597-29.18l1.927,41.79
                               l-41.79-1.927l29.18,26.597c0.879,0.802,0.942,2.165,0.141,3.045C61.112,102.189,60.529,102.426,59.944,102.426z" />
                        <path fill="#FDE8A2" d="
                        M140.597,102.426c-0.585,0-1.169-0.236-1.594-0.703c-0.802-0.88-0.738-2.243,0.141-3.045   
                            l29.18-26.597l-41.792,1.927l1.927-41.79l-26.597,29.18c-0.801,0.879-2.165,0.942-3.045,0.141   
                                c-0.879-0.802-0.942-2.166-0.14-3.046l34.639-38.001l-2.259,48.992l48.992-2.259l-38.001,34.639   
                                    C141.635,102.24,141.115,102.426,140.597,102.426z" />
                        <path fill="#FDE8A2" d="
                        M67.225,180.05l2.259-48.992l-48.992,2.259l38.001-34.639c0.881-0.801,2.244-0.738,3.045,0.141  
                             c0.801,0.88,0.738,2.244-0.141,3.045l-29.18,26.597l41.79-1.927l-1.927,41.791l26.597-29.18     
                               c0.801-0.879,2.165-0.941,3.045-0.141c0.879,0.801,0.942,2.165,0.141,3.045L67.225,180.05z" />
                    </g>
                    <g>
                        <circle fill="#FBD009" cx="100.271" cy="100.271" r="46.321" />
                    </g>
                </svg>
    )
}

export default Sun