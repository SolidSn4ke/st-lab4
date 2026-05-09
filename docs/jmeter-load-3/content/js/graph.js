/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 507.0, "minX": 0.0, "maxY": 1021.0, "series": [{"data": [[0.0, 507.0], [0.1, 519.0], [0.2, 523.0], [0.3, 530.0], [0.4, 534.0], [0.5, 546.0], [0.6, 547.0], [0.7, 547.0], [0.8, 548.0], [0.9, 548.0], [1.0, 548.0], [1.1, 548.0], [1.2, 548.0], [1.3, 548.0], [1.4, 548.0], [1.5, 548.0], [1.6, 548.0], [1.7, 548.0], [1.8, 548.0], [1.9, 548.0], [2.0, 548.0], [2.1, 548.0], [2.2, 548.0], [2.3, 548.0], [2.4, 548.0], [2.5, 548.0], [2.6, 548.0], [2.7, 548.0], [2.8, 548.0], [2.9, 548.0], [3.0, 548.0], [3.1, 548.0], [3.2, 548.0], [3.3, 548.0], [3.4, 548.0], [3.5, 548.0], [3.6, 548.0], [3.7, 548.0], [3.8, 548.0], [3.9, 548.0], [4.0, 548.0], [4.1, 548.0], [4.2, 548.0], [4.3, 548.0], [4.4, 548.0], [4.5, 548.0], [4.6, 548.0], [4.7, 548.0], [4.8, 548.0], [4.9, 548.0], [5.0, 548.0], [5.1, 548.0], [5.2, 548.0], [5.3, 548.0], [5.4, 548.0], [5.5, 548.0], [5.6, 548.0], [5.7, 548.0], [5.8, 548.0], [5.9, 548.0], [6.0, 548.0], [6.1, 548.0], [6.2, 548.0], [6.3, 548.0], [6.4, 548.0], [6.5, 548.0], [6.6, 548.0], [6.7, 548.0], [6.8, 548.0], [6.9, 548.0], [7.0, 548.0], [7.1, 548.0], [7.2, 548.0], [7.3, 548.0], [7.4, 548.0], [7.5, 548.0], [7.6, 548.0], [7.7, 548.0], [7.8, 548.0], [7.9, 548.0], [8.0, 548.0], [8.1, 548.0], [8.2, 548.0], [8.3, 548.0], [8.4, 548.0], [8.5, 548.0], [8.6, 548.0], [8.7, 548.0], [8.8, 548.0], [8.9, 548.0], [9.0, 548.0], [9.1, 548.0], [9.2, 548.0], [9.3, 548.0], [9.4, 548.0], [9.5, 548.0], [9.6, 548.0], [9.7, 548.0], [9.8, 548.0], [9.9, 548.0], [10.0, 548.0], [10.1, 548.0], [10.2, 549.0], [10.3, 549.0], [10.4, 549.0], [10.5, 549.0], [10.6, 549.0], [10.7, 549.0], [10.8, 549.0], [10.9, 549.0], [11.0, 549.0], [11.1, 549.0], [11.2, 549.0], [11.3, 549.0], [11.4, 549.0], [11.5, 549.0], [11.6, 549.0], [11.7, 549.0], [11.8, 549.0], [11.9, 549.0], [12.0, 549.0], [12.1, 549.0], [12.2, 549.0], [12.3, 549.0], [12.4, 549.0], [12.5, 549.0], [12.6, 549.0], [12.7, 549.0], [12.8, 549.0], [12.9, 549.0], [13.0, 549.0], [13.1, 549.0], [13.2, 549.0], [13.3, 549.0], [13.4, 549.0], [13.5, 549.0], [13.6, 549.0], [13.7, 549.0], [13.8, 549.0], [13.9, 549.0], [14.0, 549.0], [14.1, 549.0], [14.2, 549.0], [14.3, 549.0], [14.4, 549.0], [14.5, 549.0], [14.6, 549.0], [14.7, 549.0], [14.8, 549.0], [14.9, 549.0], [15.0, 549.0], [15.1, 549.0], [15.2, 549.0], [15.3, 549.0], [15.4, 549.0], [15.5, 549.0], [15.6, 549.0], [15.7, 549.0], [15.8, 549.0], [15.9, 549.0], [16.0, 549.0], [16.1, 549.0], [16.2, 549.0], [16.3, 549.0], [16.4, 549.0], [16.5, 549.0], [16.6, 549.0], [16.7, 549.0], [16.8, 549.0], [16.9, 549.0], [17.0, 549.0], [17.1, 549.0], [17.2, 549.0], [17.3, 549.0], [17.4, 549.0], [17.5, 549.0], [17.6, 549.0], [17.7, 549.0], [17.8, 549.0], [17.9, 549.0], [18.0, 549.0], [18.1, 549.0], [18.2, 549.0], [18.3, 549.0], [18.4, 549.0], [18.5, 549.0], [18.6, 549.0], [18.7, 549.0], [18.8, 549.0], [18.9, 549.0], [19.0, 549.0], [19.1, 549.0], [19.2, 549.0], [19.3, 549.0], [19.4, 549.0], [19.5, 549.0], [19.6, 549.0], [19.7, 549.0], [19.8, 549.0], [19.9, 549.0], [20.0, 549.0], [20.1, 549.0], [20.2, 549.0], [20.3, 549.0], [20.4, 549.0], [20.5, 549.0], [20.6, 549.0], [20.7, 549.0], [20.8, 549.0], [20.9, 549.0], [21.0, 549.0], [21.1, 549.0], [21.2, 549.0], [21.3, 549.0], [21.4, 549.0], [21.5, 549.0], [21.6, 549.0], [21.7, 549.0], [21.8, 549.0], [21.9, 549.0], [22.0, 549.0], [22.1, 549.0], [22.2, 549.0], [22.3, 549.0], [22.4, 549.0], [22.5, 549.0], [22.6, 549.0], [22.7, 549.0], [22.8, 549.0], [22.9, 549.0], [23.0, 549.0], [23.1, 549.0], [23.2, 549.0], [23.3, 549.0], [23.4, 549.0], [23.5, 549.0], [23.6, 549.0], [23.7, 549.0], [23.8, 549.0], [23.9, 549.0], [24.0, 549.0], [24.1, 549.0], [24.2, 549.0], [24.3, 549.0], [24.4, 549.0], [24.5, 549.0], [24.6, 549.0], [24.7, 549.0], [24.8, 549.0], [24.9, 549.0], [25.0, 549.0], [25.1, 549.0], [25.2, 549.0], [25.3, 549.0], [25.4, 549.0], [25.5, 549.0], [25.6, 549.0], [25.7, 549.0], [25.8, 549.0], [25.9, 549.0], [26.0, 549.0], [26.1, 549.0], [26.2, 549.0], [26.3, 549.0], [26.4, 549.0], [26.5, 549.0], [26.6, 549.0], [26.7, 549.0], [26.8, 549.0], [26.9, 549.0], [27.0, 549.0], [27.1, 549.0], [27.2, 549.0], [27.3, 549.0], [27.4, 549.0], [27.5, 549.0], [27.6, 549.0], [27.7, 549.0], [27.8, 549.0], [27.9, 549.0], [28.0, 549.0], [28.1, 549.0], [28.2, 549.0], [28.3, 549.0], [28.4, 549.0], [28.5, 549.0], [28.6, 549.0], [28.7, 549.0], [28.8, 549.0], [28.9, 549.0], [29.0, 549.0], [29.1, 549.0], [29.2, 549.0], [29.3, 549.0], [29.4, 549.0], [29.5, 549.0], [29.6, 549.0], [29.7, 549.0], [29.8, 549.0], [29.9, 549.0], [30.0, 549.0], [30.1, 549.0], [30.2, 549.0], [30.3, 549.0], [30.4, 549.0], [30.5, 549.0], [30.6, 549.0], [30.7, 549.0], [30.8, 549.0], [30.9, 549.0], [31.0, 549.0], [31.1, 549.0], [31.2, 549.0], [31.3, 549.0], [31.4, 549.0], [31.5, 549.0], [31.6, 549.0], [31.7, 549.0], [31.8, 549.0], [31.9, 549.0], [32.0, 549.0], [32.1, 549.0], [32.2, 549.0], [32.3, 549.0], [32.4, 549.0], [32.5, 549.0], [32.6, 549.0], [32.7, 549.0], [32.8, 549.0], [32.9, 549.0], [33.0, 549.0], [33.1, 549.0], [33.2, 549.0], [33.3, 549.0], [33.4, 549.0], [33.5, 549.0], [33.6, 549.0], [33.7, 549.0], [33.8, 549.0], [33.9, 549.0], [34.0, 549.0], [34.1, 549.0], [34.2, 549.0], [34.3, 549.0], [34.4, 549.0], [34.5, 549.0], [34.6, 549.0], [34.7, 549.0], [34.8, 549.0], [34.9, 549.0], [35.0, 549.0], [35.1, 549.0], [35.2, 549.0], [35.3, 549.0], [35.4, 549.0], [35.5, 549.0], [35.6, 549.0], [35.7, 549.0], [35.8, 549.0], [35.9, 549.0], [36.0, 549.0], [36.1, 549.0], [36.2, 549.0], [36.3, 549.0], [36.4, 549.0], [36.5, 549.0], [36.6, 549.0], [36.7, 549.0], [36.8, 549.0], [36.9, 549.0], [37.0, 550.0], [37.1, 550.0], [37.2, 550.0], [37.3, 550.0], [37.4, 550.0], [37.5, 550.0], [37.6, 550.0], [37.7, 550.0], [37.8, 550.0], [37.9, 550.0], [38.0, 550.0], [38.1, 550.0], [38.2, 550.0], [38.3, 550.0], [38.4, 550.0], [38.5, 550.0], [38.6, 550.0], [38.7, 550.0], [38.8, 550.0], [38.9, 550.0], [39.0, 550.0], [39.1, 550.0], [39.2, 550.0], [39.3, 550.0], [39.4, 550.0], [39.5, 550.0], [39.6, 550.0], [39.7, 550.0], [39.8, 550.0], [39.9, 550.0], [40.0, 550.0], [40.1, 550.0], [40.2, 550.0], [40.3, 550.0], [40.4, 550.0], [40.5, 550.0], [40.6, 550.0], [40.7, 550.0], [40.8, 550.0], [40.9, 550.0], [41.0, 550.0], [41.1, 550.0], [41.2, 550.0], [41.3, 550.0], [41.4, 550.0], [41.5, 550.0], [41.6, 550.0], [41.7, 550.0], [41.8, 550.0], [41.9, 550.0], [42.0, 550.0], [42.1, 550.0], [42.2, 550.0], [42.3, 550.0], [42.4, 550.0], [42.5, 550.0], [42.6, 550.0], [42.7, 550.0], [42.8, 550.0], [42.9, 550.0], [43.0, 550.0], [43.1, 550.0], [43.2, 550.0], [43.3, 550.0], [43.4, 550.0], [43.5, 550.0], [43.6, 550.0], [43.7, 550.0], [43.8, 550.0], [43.9, 550.0], [44.0, 550.0], [44.1, 550.0], [44.2, 550.0], [44.3, 550.0], [44.4, 550.0], [44.5, 550.0], [44.6, 550.0], [44.7, 550.0], [44.8, 550.0], [44.9, 550.0], [45.0, 550.0], [45.1, 550.0], [45.2, 550.0], [45.3, 550.0], [45.4, 550.0], [45.5, 550.0], [45.6, 550.0], [45.7, 550.0], [45.8, 550.0], [45.9, 550.0], [46.0, 550.0], [46.1, 550.0], [46.2, 550.0], [46.3, 550.0], [46.4, 550.0], [46.5, 550.0], [46.6, 550.0], [46.7, 550.0], [46.8, 550.0], [46.9, 550.0], [47.0, 550.0], [47.1, 550.0], [47.2, 550.0], [47.3, 550.0], [47.4, 550.0], [47.5, 550.0], [47.6, 550.0], [47.7, 550.0], [47.8, 550.0], [47.9, 550.0], [48.0, 550.0], [48.1, 550.0], [48.2, 550.0], [48.3, 550.0], [48.4, 550.0], [48.5, 550.0], [48.6, 550.0], [48.7, 550.0], [48.8, 550.0], [48.9, 550.0], [49.0, 550.0], [49.1, 550.0], [49.2, 550.0], [49.3, 550.0], [49.4, 550.0], [49.5, 550.0], [49.6, 550.0], [49.7, 550.0], [49.8, 550.0], [49.9, 550.0], [50.0, 550.0], [50.1, 550.0], [50.2, 550.0], [50.3, 550.0], [50.4, 550.0], [50.5, 550.0], [50.6, 550.0], [50.7, 550.0], [50.8, 550.0], [50.9, 550.0], [51.0, 550.0], [51.1, 550.0], [51.2, 550.0], [51.3, 550.0], [51.4, 550.0], [51.5, 550.0], [51.6, 550.0], [51.7, 550.0], [51.8, 550.0], [51.9, 550.0], [52.0, 550.0], [52.1, 550.0], [52.2, 550.0], [52.3, 550.0], [52.4, 550.0], [52.5, 550.0], [52.6, 550.0], [52.7, 550.0], [52.8, 550.0], [52.9, 550.0], [53.0, 550.0], [53.1, 550.0], [53.2, 550.0], [53.3, 550.0], [53.4, 550.0], [53.5, 550.0], [53.6, 550.0], [53.7, 550.0], [53.8, 550.0], [53.9, 550.0], [54.0, 550.0], [54.1, 550.0], [54.2, 550.0], [54.3, 550.0], [54.4, 550.0], [54.5, 550.0], [54.6, 550.0], [54.7, 550.0], [54.8, 550.0], [54.9, 550.0], [55.0, 550.0], [55.1, 550.0], [55.2, 550.0], [55.3, 550.0], [55.4, 550.0], [55.5, 550.0], [55.6, 550.0], [55.7, 550.0], [55.8, 550.0], [55.9, 550.0], [56.0, 550.0], [56.1, 550.0], [56.2, 550.0], [56.3, 550.0], [56.4, 550.0], [56.5, 550.0], [56.6, 550.0], [56.7, 550.0], [56.8, 550.0], [56.9, 550.0], [57.0, 550.0], [57.1, 550.0], [57.2, 550.0], [57.3, 550.0], [57.4, 550.0], [57.5, 550.0], [57.6, 550.0], [57.7, 550.0], [57.8, 550.0], [57.9, 551.0], [58.0, 551.0], [58.1, 551.0], [58.2, 551.0], [58.3, 551.0], [58.4, 551.0], [58.5, 551.0], [58.6, 551.0], [58.7, 551.0], [58.8, 551.0], [58.9, 551.0], [59.0, 551.0], [59.1, 551.0], [59.2, 551.0], [59.3, 551.0], [59.4, 551.0], [59.5, 551.0], [59.6, 551.0], [59.7, 551.0], [59.8, 551.0], [59.9, 551.0], [60.0, 551.0], [60.1, 551.0], [60.2, 551.0], [60.3, 551.0], [60.4, 551.0], [60.5, 551.0], [60.6, 551.0], [60.7, 551.0], [60.8, 551.0], [60.9, 551.0], [61.0, 551.0], [61.1, 551.0], [61.2, 551.0], [61.3, 551.0], [61.4, 551.0], [61.5, 551.0], [61.6, 551.0], [61.7, 551.0], [61.8, 551.0], [61.9, 551.0], [62.0, 551.0], [62.1, 551.0], [62.2, 551.0], [62.3, 551.0], [62.4, 551.0], [62.5, 551.0], [62.6, 551.0], [62.7, 551.0], [62.8, 551.0], [62.9, 551.0], [63.0, 551.0], [63.1, 551.0], [63.2, 551.0], [63.3, 551.0], [63.4, 551.0], [63.5, 551.0], [63.6, 551.0], [63.7, 551.0], [63.8, 551.0], [63.9, 551.0], [64.0, 551.0], [64.1, 551.0], [64.2, 551.0], [64.3, 551.0], [64.4, 551.0], [64.5, 551.0], [64.6, 551.0], [64.7, 551.0], [64.8, 551.0], [64.9, 551.0], [65.0, 551.0], [65.1, 551.0], [65.2, 551.0], [65.3, 551.0], [65.4, 551.0], [65.5, 551.0], [65.6, 551.0], [65.7, 551.0], [65.8, 551.0], [65.9, 552.0], [66.0, 552.0], [66.1, 552.0], [66.2, 552.0], [66.3, 552.0], [66.4, 552.0], [66.5, 552.0], [66.6, 552.0], [66.7, 552.0], [66.8, 552.0], [66.9, 552.0], [67.0, 552.0], [67.1, 552.0], [67.2, 552.0], [67.3, 552.0], [67.4, 552.0], [67.5, 552.0], [67.6, 552.0], [67.7, 552.0], [67.8, 552.0], [67.9, 552.0], [68.0, 552.0], [68.1, 552.0], [68.2, 552.0], [68.3, 552.0], [68.4, 552.0], [68.5, 552.0], [68.6, 552.0], [68.7, 552.0], [68.8, 552.0], [68.9, 552.0], [69.0, 552.0], [69.1, 552.0], [69.2, 552.0], [69.3, 552.0], [69.4, 552.0], [69.5, 552.0], [69.6, 553.0], [69.7, 553.0], [69.8, 553.0], [69.9, 553.0], [70.0, 553.0], [70.1, 553.0], [70.2, 553.0], [70.3, 553.0], [70.4, 553.0], [70.5, 553.0], [70.6, 553.0], [70.7, 553.0], [70.8, 553.0], [70.9, 553.0], [71.0, 553.0], [71.1, 553.0], [71.2, 553.0], [71.3, 553.0], [71.4, 553.0], [71.5, 553.0], [71.6, 553.0], [71.7, 553.0], [71.8, 553.0], [71.9, 553.0], [72.0, 553.0], [72.1, 553.0], [72.2, 553.0], [72.3, 553.0], [72.4, 553.0], [72.5, 553.0], [72.6, 553.0], [72.7, 553.0], [72.8, 553.0], [72.9, 554.0], [73.0, 554.0], [73.1, 554.0], [73.2, 554.0], [73.3, 554.0], [73.4, 554.0], [73.5, 554.0], [73.6, 554.0], [73.7, 555.0], [73.8, 555.0], [73.9, 555.0], [74.0, 555.0], [74.1, 555.0], [74.2, 555.0], [74.3, 556.0], [74.4, 556.0], [74.5, 556.0], [74.6, 556.0], [74.7, 557.0], [74.8, 557.0], [74.9, 557.0], [75.0, 558.0], [75.1, 558.0], [75.2, 558.0], [75.3, 559.0], [75.4, 559.0], [75.5, 560.0], [75.6, 561.0], [75.7, 561.0], [75.8, 562.0], [75.9, 562.0], [76.0, 563.0], [76.1, 563.0], [76.2, 563.0], [76.3, 563.0], [76.4, 564.0], [76.5, 564.0], [76.6, 564.0], [76.7, 564.0], [76.8, 564.0], [76.9, 564.0], [77.0, 564.0], [77.1, 565.0], [77.2, 565.0], [77.3, 565.0], [77.4, 565.0], [77.5, 565.0], [77.6, 565.0], [77.7, 565.0], [77.8, 566.0], [77.9, 566.0], [78.0, 566.0], [78.1, 566.0], [78.2, 566.0], [78.3, 566.0], [78.4, 567.0], [78.5, 567.0], [78.6, 567.0], [78.7, 567.0], [78.8, 568.0], [78.9, 568.0], [79.0, 569.0], [79.1, 569.0], [79.2, 570.0], [79.3, 570.0], [79.4, 571.0], [79.5, 571.0], [79.6, 571.0], [79.7, 572.0], [79.8, 573.0], [79.9, 573.0], [80.0, 574.0], [80.1, 574.0], [80.2, 575.0], [80.3, 575.0], [80.4, 575.0], [80.5, 576.0], [80.6, 577.0], [80.7, 577.0], [80.8, 578.0], [80.9, 578.0], [81.0, 578.0], [81.1, 579.0], [81.2, 579.0], [81.3, 580.0], [81.4, 581.0], [81.5, 582.0], [81.6, 582.0], [81.7, 583.0], [81.8, 583.0], [81.9, 583.0], [82.0, 584.0], [82.1, 584.0], [82.2, 585.0], [82.3, 585.0], [82.4, 586.0], [82.5, 586.0], [82.6, 587.0], [82.7, 587.0], [82.8, 587.0], [82.9, 588.0], [83.0, 588.0], [83.1, 589.0], [83.2, 590.0], [83.3, 590.0], [83.4, 591.0], [83.5, 592.0], [83.6, 592.0], [83.7, 592.0], [83.8, 593.0], [83.9, 593.0], [84.0, 594.0], [84.1, 594.0], [84.2, 595.0], [84.3, 596.0], [84.4, 597.0], [84.5, 597.0], [84.6, 598.0], [84.7, 598.0], [84.8, 599.0], [84.9, 599.0], [85.0, 600.0], [85.1, 600.0], [85.2, 600.0], [85.3, 601.0], [85.4, 602.0], [85.5, 602.0], [85.6, 602.0], [85.7, 603.0], [85.8, 603.0], [85.9, 604.0], [86.0, 604.0], [86.1, 605.0], [86.2, 605.0], [86.3, 605.0], [86.4, 606.0], [86.5, 606.0], [86.6, 607.0], [86.7, 607.0], [86.8, 608.0], [86.9, 609.0], [87.0, 609.0], [87.1, 610.0], [87.2, 611.0], [87.3, 611.0], [87.4, 612.0], [87.5, 613.0], [87.6, 613.0], [87.7, 614.0], [87.8, 614.0], [87.9, 615.0], [88.0, 615.0], [88.1, 616.0], [88.2, 616.0], [88.3, 617.0], [88.4, 617.0], [88.5, 618.0], [88.6, 619.0], [88.7, 620.0], [88.8, 621.0], [88.9, 621.0], [89.0, 622.0], [89.1, 622.0], [89.2, 623.0], [89.3, 624.0], [89.4, 624.0], [89.5, 625.0], [89.6, 625.0], [89.7, 626.0], [89.8, 626.0], [89.9, 627.0], [90.0, 628.0], [90.1, 628.0], [90.2, 628.0], [90.3, 629.0], [90.4, 630.0], [90.5, 631.0], [90.6, 631.0], [90.7, 632.0], [90.8, 633.0], [90.9, 634.0], [91.0, 634.0], [91.1, 635.0], [91.2, 635.0], [91.3, 636.0], [91.4, 636.0], [91.5, 637.0], [91.6, 638.0], [91.7, 638.0], [91.8, 638.0], [91.9, 639.0], [92.0, 640.0], [92.1, 640.0], [92.2, 641.0], [92.3, 641.0], [92.4, 642.0], [92.5, 643.0], [92.6, 644.0], [92.7, 644.0], [92.8, 645.0], [92.9, 646.0], [93.0, 647.0], [93.1, 648.0], [93.2, 648.0], [93.3, 649.0], [93.4, 649.0], [93.5, 650.0], [93.6, 651.0], [93.7, 652.0], [93.8, 652.0], [93.9, 653.0], [94.0, 654.0], [94.1, 654.0], [94.2, 655.0], [94.3, 656.0], [94.4, 657.0], [94.5, 658.0], [94.6, 659.0], [94.7, 660.0], [94.8, 660.0], [94.9, 662.0], [95.0, 662.0], [95.1, 663.0], [95.2, 664.0], [95.3, 664.0], [95.4, 664.0], [95.5, 665.0], [95.6, 667.0], [95.7, 667.0], [95.8, 668.0], [95.9, 668.0], [96.0, 669.0], [96.1, 669.0], [96.2, 670.0], [96.3, 670.0], [96.4, 671.0], [96.5, 671.0], [96.6, 672.0], [96.7, 673.0], [96.8, 673.0], [96.9, 674.0], [97.0, 674.0], [97.1, 675.0], [97.2, 675.0], [97.3, 675.0], [97.4, 676.0], [97.5, 676.0], [97.6, 677.0], [97.7, 677.0], [97.8, 678.0], [97.9, 678.0], [98.0, 679.0], [98.1, 680.0], [98.2, 680.0], [98.3, 680.0], [98.4, 681.0], [98.5, 682.0], [98.6, 683.0], [98.7, 685.0], [98.8, 687.0], [98.9, 690.0], [99.0, 695.0], [99.1, 698.0], [99.2, 701.0], [99.3, 707.0], [99.4, 714.0], [99.5, 719.0], [99.6, 729.0], [99.7, 733.0], [99.8, 742.0], [99.9, 760.0], [100.0, 1021.0]], "isOverall": false, "label": "Config 3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 6795.0, "series": [{"data": [[600.0, 1137.0], [700.0, 66.0], [900.0, 1.0], [500.0, 6795.0], [1000.0, 1.0]], "isOverall": false, "label": "Config 3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 7998.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 7998.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.53968253968254, "minX": 1.7783343E12, "maxY": 8.0, "series": [{"data": [[1.7783343E12, 7.058593750000002], [1.7783358E12, 4.53968253968254], [1.7783355E12, 8.0], [1.77833568E12, 8.0], [1.77833538E12, 8.0], [1.77833508E12, 8.0], [1.77833478E12, 8.0], [1.77833562E12, 8.0], [1.77833532E12, 8.0], [1.77833502E12, 8.0], [1.7783352E12, 8.0], [1.7783349E12, 8.0], [1.7783346E12, 8.0], [1.77833448E12, 8.0], [1.77833544E12, 8.0], [1.77833514E12, 8.0], [1.77833484E12, 8.0], [1.77833472E12, 8.0], [1.77833436E12, 8.0], [1.77833574E12, 7.87577639751553], [1.77833496E12, 8.0], [1.77833466E12, 8.0], [1.77833442E12, 8.0], [1.77833454E12, 8.0], [1.77833556E12, 8.0], [1.77833526E12, 8.0]], "isOverall": false, "label": "Load Test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7783358E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 529.2307692307693, "minX": 1.0, "maxY": 577.4000000000001, "series": [{"data": [[1.0, 531.6666666666666], [2.0, 529.2307692307693], [4.0, 539.1199999999999], [8.0, 567.1289251978586], [5.0, 577.4000000000001], [3.0, 542.7333333333333], [6.0, 559.5405405405405], [7.0, 574.4250000000003]], "isOverall": false, "label": "Config 3", "isController": false}, {"data": [[7.937625000000003, 566.9473749999992]], "isOverall": false, "label": "Config 3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 166.95, "minX": 1.7783343E12, "maxY": 1239.7, "series": [{"data": [[1.7783343E12, 985.6], [1.7783358E12, 242.55], [1.7783355E12, 1235.85], [1.77833568E12, 1228.15], [1.77833538E12, 1228.15], [1.77833508E12, 1232.0], [1.77833478E12, 1232.0], [1.77833562E12, 1232.0], [1.77833532E12, 1232.0], [1.77833502E12, 1232.0], [1.7783352E12, 1228.15], [1.7783349E12, 1232.0], [1.7783346E12, 1232.0], [1.77833448E12, 1232.0], [1.77833544E12, 1228.15], [1.77833514E12, 1232.0], [1.77833484E12, 1232.0], [1.77833472E12, 1232.0], [1.77833436E12, 1228.15], [1.77833574E12, 1239.7], [1.77833496E12, 1232.0], [1.77833466E12, 1232.0], [1.77833442E12, 1235.85], [1.77833454E12, 1232.0], [1.77833556E12, 1232.0], [1.77833526E12, 1239.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7783343E12, 678.4], [1.7783358E12, 166.95], [1.7783355E12, 850.65], [1.77833568E12, 845.35], [1.77833538E12, 845.35], [1.77833508E12, 848.0], [1.77833478E12, 848.0], [1.77833562E12, 848.0], [1.77833532E12, 848.0], [1.77833502E12, 848.0], [1.7783352E12, 845.35], [1.7783349E12, 848.0], [1.7783346E12, 848.0], [1.77833448E12, 848.0], [1.77833544E12, 845.35], [1.77833514E12, 848.0], [1.77833484E12, 848.0], [1.77833472E12, 848.0], [1.77833436E12, 845.35], [1.77833574E12, 853.3], [1.77833496E12, 848.0], [1.77833466E12, 848.0], [1.77833442E12, 850.65], [1.77833454E12, 848.0], [1.77833556E12, 848.0], [1.77833526E12, 853.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7783358E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 559.873015873016, "minX": 1.7783343E12, "maxY": 571.1536050156739, "series": [{"data": [[1.7783343E12, 563.7578124999999], [1.7783358E12, 559.873015873016], [1.7783355E12, 566.7943925233642], [1.77833568E12, 571.1536050156739], [1.77833538E12, 566.7335423197493], [1.77833508E12, 564.3593750000001], [1.77833478E12, 567.5593750000002], [1.77833562E12, 565.0906249999998], [1.77833532E12, 566.3625000000001], [1.77833502E12, 565.4187499999998], [1.7783352E12, 570.6300940438869], [1.7783349E12, 566.6625], [1.7783346E12, 567.63125], [1.77833448E12, 567.0375], [1.77833544E12, 566.2633228840124], [1.77833514E12, 570.6093749999998], [1.77833484E12, 566.0874999999995], [1.77833472E12, 566.7249999999998], [1.77833436E12, 565.1253918495298], [1.77833574E12, 568.8136645962733], [1.77833496E12, 570.9937500000005], [1.77833466E12, 565.7406250000007], [1.77833442E12, 565.7788161993766], [1.77833454E12, 569.1687500000004], [1.77833556E12, 564.103125], [1.77833526E12, 565.8540372670811]], "isOverall": false, "label": "Config 3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7783358E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 559.873015873016, "minX": 1.7783343E12, "maxY": 571.1473354231975, "series": [{"data": [[1.7783343E12, 563.6757812499994], [1.7783358E12, 559.873015873016], [1.7783355E12, 566.7881619937697], [1.77833568E12, 571.1473354231975], [1.77833538E12, 566.730407523511], [1.77833508E12, 564.3562500000002], [1.77833478E12, 567.5249999999994], [1.77833562E12, 565.0781250000006], [1.77833532E12, 566.3562499999998], [1.77833502E12, 565.4062500000005], [1.7783352E12, 570.614420062696], [1.7783349E12, 566.6437499999998], [1.7783346E12, 567.5937499999995], [1.77833448E12, 567.0062499999995], [1.77833544E12, 566.2539184952976], [1.77833514E12, 570.5812499999997], [1.77833484E12, 566.0687500000003], [1.77833472E12, 566.6999999999997], [1.77833436E12, 565.0877742946705], [1.77833574E12, 568.8105590062112], [1.77833496E12, 570.9718749999997], [1.77833466E12, 565.6999999999992], [1.77833442E12, 565.7538940809966], [1.77833454E12, 569.1374999999997], [1.77833556E12, 564.103125], [1.77833526E12, 565.83850931677]], "isOverall": false, "label": "Config 3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7783358E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.7783343E12, "maxY": 0.04296875000000004, "series": [{"data": [[1.7783343E12, 0.04296875000000004], [1.7783358E12, 0.0], [1.7783355E12, 0.0280373831775701], [1.77833568E12, 0.025078369905956098], [1.77833538E12, 0.018808777429467075], [1.77833508E12, 0.028125000000000015], [1.77833478E12, 0.028125000000000008], [1.77833562E12, 0.024999999999999984], [1.77833532E12, 0.024999999999999998], [1.77833502E12, 0.02812500000000002], [1.7783352E12, 0.028213166144200663], [1.7783349E12, 0.024999999999999977], [1.7783346E12, 0.024999999999999984], [1.77833448E12, 0.015625000000000014], [1.77833544E12, 0.028213166144200642], [1.77833514E12, 0.028125000000000015], [1.77833484E12, 0.02812500000000003], [1.77833472E12, 0.028125000000000008], [1.77833436E12, 0.025078369905956098], [1.77833574E12, 0.024844720496894394], [1.77833496E12, 0.02812500000000002], [1.77833466E12, 0.03437500000000001], [1.77833442E12, 0.028037383177570107], [1.77833454E12, 0.028125000000000015], [1.77833556E12, 0.028125000000000015], [1.77833526E12, 0.02795031055900624]], "isOverall": false, "label": "Config 3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7783358E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 507.0, "minX": 1.7783343E12, "maxY": 773.0, "series": [{"data": [[1.7783343E12, 763.0], [1.7783358E12, 675.0], [1.7783355E12, 727.0], [1.77833568E12, 741.0], [1.77833538E12, 742.0], [1.77833508E12, 733.0], [1.77833478E12, 715.0], [1.77833562E12, 744.0], [1.77833532E12, 760.0], [1.77833502E12, 750.0], [1.7783352E12, 701.0], [1.7783349E12, 712.0], [1.7783346E12, 773.0], [1.77833448E12, 734.0], [1.77833544E12, 701.0], [1.77833514E12, 731.0], [1.77833484E12, 764.0], [1.77833472E12, 744.0], [1.77833436E12, 707.0], [1.77833574E12, 739.0], [1.77833496E12, 772.0], [1.77833466E12, 741.0], [1.77833442E12, 721.0], [1.77833454E12, 756.0], [1.77833556E12, 730.0], [1.77833526E12, 725.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7783343E12, 507.0], [1.7783358E12, 546.0], [1.7783355E12, 548.0], [1.77833568E12, 548.0], [1.77833538E12, 547.0], [1.77833508E12, 547.0], [1.77833478E12, 547.0], [1.77833562E12, 547.0], [1.77833532E12, 547.0], [1.77833502E12, 548.0], [1.7783352E12, 548.0], [1.7783349E12, 547.0], [1.7783346E12, 548.0], [1.77833448E12, 548.0], [1.77833544E12, 547.0], [1.77833514E12, 547.0], [1.77833484E12, 548.0], [1.77833472E12, 547.0], [1.77833436E12, 548.0], [1.77833574E12, 548.0], [1.77833496E12, 547.0], [1.77833466E12, 548.0], [1.77833442E12, 548.0], [1.77833454E12, 548.0], [1.77833556E12, 547.0], [1.77833526E12, 548.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7783343E12, 626.3], [1.7783358E12, 601.0], [1.7783355E12, 632.6], [1.77833568E12, 643.0], [1.77833538E12, 626.0], [1.77833508E12, 610.9000000000001], [1.77833478E12, 632.9000000000001], [1.77833562E12, 611.0], [1.77833532E12, 621.6000000000001], [1.77833502E12, 614.0], [1.7783352E12, 649.0], [1.7783349E12, 627.7], [1.7783346E12, 635.5000000000002], [1.77833448E12, 638.8000000000001], [1.77833544E12, 620.0], [1.77833514E12, 637.9000000000001], [1.77833484E12, 621.6000000000001], [1.77833472E12, 626.8000000000001], [1.77833436E12, 622.0], [1.77833574E12, 636.0], [1.77833496E12, 652.6000000000001], [1.77833466E12, 625.7], [1.77833442E12, 622.8], [1.77833454E12, 625.0], [1.77833556E12, 614.9000000000001], [1.77833526E12, 629.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7783343E12, 699.1700000000001], [1.7783358E12, 675.0], [1.7783355E12, 696.7199999999993], [1.77833568E12, 695.4000000000001], [1.77833538E12, 715.8], [1.77833508E12, 679.58], [1.77833478E12, 683.1600000000001], [1.77833562E12, 687.5300000000002], [1.77833532E12, 703.8500000000004], [1.77833502E12, 688.58], [1.7783352E12, 695.0000000000002], [1.7783349E12, 678.0], [1.7783346E12, 702.5400000000005], [1.77833448E12, 702.6400000000003], [1.77833544E12, 692.4000000000001], [1.77833514E12, 715.1100000000001], [1.77833484E12, 711.9000000000002], [1.77833472E12, 721.7000000000006], [1.77833436E12, 696.6], [1.77833574E12, 710.8599999999997], [1.77833496E12, 742.1100000000001], [1.77833466E12, 685.95], [1.77833442E12, 693.0199999999998], [1.77833454E12, 695.9100000000001], [1.77833556E12, 684.58], [1.77833526E12, 681.77]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7783343E12, 551.0], [1.7783358E12, 550.0], [1.7783355E12, 550.0], [1.77833568E12, 550.0], [1.77833538E12, 550.0], [1.77833508E12, 550.0], [1.77833478E12, 550.0], [1.77833562E12, 550.0], [1.77833532E12, 550.0], [1.77833502E12, 550.0], [1.7783352E12, 550.0], [1.7783349E12, 550.0], [1.7783346E12, 550.0], [1.77833448E12, 550.0], [1.77833544E12, 550.0], [1.77833514E12, 550.0], [1.77833484E12, 550.0], [1.77833472E12, 550.0], [1.77833436E12, 550.0], [1.77833574E12, 550.0], [1.77833496E12, 550.0], [1.77833466E12, 550.0], [1.77833442E12, 550.0], [1.77833454E12, 550.0], [1.77833556E12, 550.0], [1.77833526E12, 550.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7783343E12, 669.0], [1.7783358E12, 639.9999999999999], [1.7783355E12, 650.9], [1.77833568E12, 670.0], [1.77833538E12, 664.0], [1.77833508E12, 649.8499999999999], [1.77833478E12, 653.0], [1.77833562E12, 658.0], [1.77833532E12, 663.0], [1.77833502E12, 651.8499999999999], [1.7783352E12, 675.0], [1.7783349E12, 660.75], [1.7783346E12, 657.0], [1.77833448E12, 655.95], [1.77833544E12, 657.0], [1.77833514E12, 664.95], [1.77833484E12, 654.95], [1.77833472E12, 660.6999999999999], [1.77833436E12, 659.0], [1.77833574E12, 667.8499999999999], [1.77833496E12, 675.9], [1.77833466E12, 664.0], [1.77833442E12, 662.0], [1.77833454E12, 658.05], [1.77833556E12, 662.0], [1.77833526E12, 651.8499999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7783358E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 513.5, "minX": 1.0, "maxY": 969.0, "series": [{"data": [[1.0, 538.5], [2.0, 513.5], [4.0, 549.0], [5.0, 550.0], [3.0, 554.5], [6.0, 583.0], [7.0, 550.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5.0, 969.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 513.0, "minX": 1.0, "maxY": 969.0, "series": [{"data": [[1.0, 536.0], [2.0, 513.0], [4.0, 549.0], [5.0, 550.0], [3.0, 554.5], [6.0, 583.0], [7.0, 550.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5.0, 969.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.0166666666666666, "minX": 1.7783343E12, "maxY": 5.333333333333333, "series": [{"data": [[1.7783343E12, 4.333333333333333], [1.7783358E12, 1.0166666666666666], [1.7783355E12, 5.333333333333333], [1.77833568E12, 5.333333333333333], [1.77833538E12, 5.333333333333333], [1.77833508E12, 5.333333333333333], [1.77833478E12, 5.333333333333333], [1.77833562E12, 5.333333333333333], [1.77833532E12, 5.333333333333333], [1.77833502E12, 5.333333333333333], [1.7783352E12, 5.333333333333333], [1.7783349E12, 5.333333333333333], [1.7783346E12, 5.333333333333333], [1.77833448E12, 5.333333333333333], [1.77833544E12, 5.333333333333333], [1.77833514E12, 5.333333333333333], [1.77833484E12, 5.333333333333333], [1.77833472E12, 5.333333333333333], [1.77833436E12, 5.333333333333333], [1.77833574E12, 5.316666666666666], [1.77833496E12, 5.333333333333333], [1.77833466E12, 5.333333333333333], [1.77833442E12, 5.333333333333333], [1.77833454E12, 5.333333333333333], [1.77833556E12, 5.333333333333333], [1.77833526E12, 5.333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7783358E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.05, "minX": 1.7783343E12, "maxY": 5.366666666666666, "series": [{"data": [[1.7783343E12, 4.266666666666667], [1.7783358E12, 1.05], [1.7783355E12, 5.35], [1.77833568E12, 5.316666666666666], [1.77833538E12, 5.316666666666666], [1.77833508E12, 5.333333333333333], [1.77833478E12, 5.333333333333333], [1.77833562E12, 5.333333333333333], [1.77833532E12, 5.333333333333333], [1.77833502E12, 5.333333333333333], [1.7783352E12, 5.316666666666666], [1.7783349E12, 5.333333333333333], [1.7783346E12, 5.333333333333333], [1.77833448E12, 5.333333333333333], [1.77833544E12, 5.316666666666666], [1.77833514E12, 5.333333333333333], [1.77833484E12, 5.333333333333333], [1.77833472E12, 5.333333333333333], [1.77833436E12, 5.316666666666666], [1.77833574E12, 5.366666666666666], [1.77833496E12, 5.333333333333333], [1.77833466E12, 5.333333333333333], [1.77833442E12, 5.35], [1.77833454E12, 5.333333333333333], [1.77833556E12, 5.333333333333333], [1.77833526E12, 5.366666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7783358E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7783343E12, "maxY": 5.366666666666666, "series": [{"data": [[1.77833454E12, 0.03333333333333333]], "isOverall": false, "label": "Config 3-failure", "isController": false}, {"data": [[1.7783343E12, 4.266666666666667], [1.7783358E12, 1.05], [1.7783355E12, 5.35], [1.77833568E12, 5.316666666666666], [1.77833538E12, 5.316666666666666], [1.77833508E12, 5.333333333333333], [1.77833478E12, 5.333333333333333], [1.77833562E12, 5.333333333333333], [1.77833532E12, 5.333333333333333], [1.77833502E12, 5.333333333333333], [1.7783352E12, 5.316666666666666], [1.7783349E12, 5.333333333333333], [1.7783346E12, 5.333333333333333], [1.77833448E12, 5.333333333333333], [1.77833544E12, 5.316666666666666], [1.77833514E12, 5.333333333333333], [1.77833484E12, 5.333333333333333], [1.77833472E12, 5.333333333333333], [1.77833436E12, 5.316666666666666], [1.77833574E12, 5.366666666666666], [1.77833496E12, 5.333333333333333], [1.77833466E12, 5.333333333333333], [1.77833442E12, 5.35], [1.77833454E12, 5.3], [1.77833556E12, 5.333333333333333], [1.77833526E12, 5.366666666666666]], "isOverall": false, "label": "Config 3-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7783358E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7783343E12, "maxY": 5.366666666666666, "series": [{"data": [[1.7783343E12, 4.266666666666667], [1.7783358E12, 1.05], [1.7783355E12, 5.35], [1.77833568E12, 5.316666666666666], [1.77833538E12, 5.316666666666666], [1.77833508E12, 5.333333333333333], [1.77833478E12, 5.333333333333333], [1.77833562E12, 5.333333333333333], [1.77833532E12, 5.333333333333333], [1.77833502E12, 5.333333333333333], [1.7783352E12, 5.316666666666666], [1.7783349E12, 5.333333333333333], [1.7783346E12, 5.333333333333333], [1.77833448E12, 5.333333333333333], [1.77833544E12, 5.316666666666666], [1.77833514E12, 5.333333333333333], [1.77833484E12, 5.333333333333333], [1.77833472E12, 5.333333333333333], [1.77833436E12, 5.316666666666666], [1.77833574E12, 5.366666666666666], [1.77833496E12, 5.333333333333333], [1.77833466E12, 5.333333333333333], [1.77833442E12, 5.35], [1.77833454E12, 5.3], [1.77833556E12, 5.333333333333333], [1.77833526E12, 5.366666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.77833454E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7783358E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

