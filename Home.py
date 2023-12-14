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

import streamlit as st

st.title("Welcome to Streamlit Core metrics!")

"""
We're so happy you stopped by.

This app tracks a variety of metrics analyses that we use to track the health of
Streamlit Core products and teams.
"""

with st.ns.banner:
    st.write("Note: this app was last updated on 2023-12-14")

with st.ns.row_1_1:
    st.subheader("Open Source")
    st.write(
        "The original free Python library which lets you create beautiful data apps"
    )
    st.button("Q3 Focus", use_container_width=True)
    st.button("North Star", use_container_width=True)

with st.ns.row_1_2:
    st.subheader("Community Cloud")
    st.write(
        "A place for developers to deploy and share their apps with the world for free"
    )
    st.button("Q3 Focus", use_container_width=True, key="cc_q3_focus")
    st.button("North Star", use_container_width=True, key="cc_north_star")

with st.ns.row_1_3:
    st.subheader("Ecosystem Growth")
    st.write(
        "A paid version of Streamlit that includes features for enterprise use cases"
    )
    st.button("Q3 Focus", use_container_width=True, key="eg_q3_focus")
    st.button("North Star", use_container_width=True, key="eg_north_star")

with st.ns.row_2_1:
    st.info("Check out some of our newest apps")

    col1, col2, col3 = st.columns(3)

    col1.button("Hugging Face Spaces & Gradio", use_container_width=True)

    col2.button("Docs Analytics", use_container_width=True)

    col3.button("Usage of Favorite Button", use_container_width=True)

    """
    If you're interested in metrics for :snowflake: Streamlit-in-Snowflake, please
    head over to the [SiS Metrics](https://go/sis-metrics) app.

    Any questions? Feel free to reach out to us on #st-data-team!
    """
