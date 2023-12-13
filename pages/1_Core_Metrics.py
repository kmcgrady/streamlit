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

st.title("Core Metrics")

"""
Metrics that we track through the open-source package. These came from all apps
that are being depeloped or deployed somewhere, not only from Streamlit Cloud.
"""

with st.ns.row_1_1:
    st.metric(
        "Monthly Active Developers",
        "212,087",
        "14%",
        help="The number of developers who have used Streamlit in the last 30 days",
    )

with st.ns.row_1_2:
    st.metric(
        "Monthly Active Apps",
        "207,998",
        "14%",
        help="The number of apps that have been deployed in the last 30 days",
    )

df = pd.read_csv("data.csv")

st.ns.row_2_title.subheader("Developers")

with st.ns.row_2_1:
    st.write("**Open Source Developers**")

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


with st.ns.row_2_2:
    st.write("**Open Source :blue[Super] Developers**")

    chart, data, sql, description, download = st.tabs(
        ["Chart", "Data Preview", "SQL", "Description", "Download Data"]
    )

    with chart:
        plotly_time_series(
            df,
            x="record_date",
            y=["devs_28dau"],
        )

    with data:
        st.write(df)


st.ns.row_3_title.subheader("Apps")

with st.ns.row_3_1:
    st.write("**Open Source Deployed Apps**")

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
    st.write("**Community Cloud Apps**")

    chart, data, sql, description, download = st.tabs(
        ["Chart", "Data Preview", "SQL", "Description", "Download Data"]
    )

    with chart:
        plotly_time_series(
            df,
            x="record_date",
            y=["devs_28dau"],
        )

    with data:
        st.write(df)
