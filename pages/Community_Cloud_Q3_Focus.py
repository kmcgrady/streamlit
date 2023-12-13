# Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022)
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import pandas as pd
from utils import plotly_time_series

import streamlit as st

st.title("Community Cloud: Q3 Focus")

"""
This apps looks at the key product areas of the Community Cloud Team in Q3:
- In-Browser Editor: The streamlit community cloud users can use in-browser editing feature
         by forking an app, creating an app from the template or editing an existing app.
         We look at the high level user adoption across all three user journeys.
         (Deep Dive coming soon!)
- Snowflake Dataset (coming soon!)
"""


st.header("In-Browser Editor Adoption")

with st.ns.row_1_1.expander("App Changelog"):
    """
    * `2023-10-11` Added the session_id to better define successes and failures by session.
    * `2023-10-06` Disabled the error tracking and improved our error telemetry.
    * `2023-09-20` Added error codes to differentiate errors.
    """

with st.ns.row_2_1:
    st.metric(
        "Total Users",
        "26,279",
        "5%",
        help="Total users who have used the in-browser editor",
    )

with st.ns.row_2_2:
    st.metric(
        "Monthly active deployed apps",
        "24,125",
        "2%",
        help="Total apps that have been deployed in the last 30 days",
    )

df = pd.read_csv("data.csv")

with st.ns.row_3_1:
    st.write("**Users**")

    chart, data, sql, description, download = st.tabs(
        ["Chart", "Data Preview", "SQL", "Description", "Download Data"]
    )

    with chart:
        plotly_time_series(
            df,
            x="record_date",
            y=[
                "devs_1dau",
                "devs_7dau",
                "devs_28dau",
            ],
        )

    with data:
        st.write(df)

with st.ns.row_3_2:
    st.write("**Apps**")

    chart, data, sql, description, download = st.tabs(
        ["Chart", "Data Preview", "SQL", "Description", "Download Data"]
    )

    with chart:
        plotly_time_series(
            df,
            x="record_date",
            y=[
                "devs_1dau",
                "devs_7dau",
                "devs_28dau",
            ],
        )

    with data:
        st.write(df)

with st.ns.row_4_1:
    with st.expander("Show end-of-quarter numbers"):
        st.dataframe(df.tail(1))

with st.ns.row_5_title:
    st.subheader("Errors")

with st.ns.row_6_1:
    st.write("Drilldown on error rate")
    select_filter = st.radio(
        "**Choose Usage From 👇**",
        ["All", "CreateFromFork", "CreateFromTemplate", "EditInGithubCodespaces"],
        horizontal=True,
    )

    st.info(
        """Error code 500 means the error is related to the server.
    Any error codes below 500 are related to user errors.
    - **500**: Server Error
    - **403**: Insufficient priviledges
    - **404**: Could not resolve app eg. the repository does not exist or is private on GitHub
    - **400**: The repo already exists
    - **2ST**: Unable to find the repo
    """
    )
