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

from typing import Iterable

import pandas as pd

import streamlit as st


def plotly_time_series(
    data: pd.DataFrame,
    x: str,
    y: str | Iterable,
    log_y: bool = False,
    color: str | None = None,
    add_xrange: bool = True,
    **kwargs,
) -> None:
    """Plot a time series using Plotly

    Args:
        data (pd.DataFrame): Original dataframe
        x (str): Column to use for x
        y (str) | Iterable): Column(s) to use for y
        log_y (bool) : plot y on the log scale
        color(str): Column to use for color
    """
    import plotly.express as px
    import plotly.graph_objects as go

    fig = px.line(data, x=x, y=y, color=color, render_mode="svg")

    if add_xrange:
        fig.update_xaxes(
            rangeselector_x=-0.1,
            rangeselector_y=1.2,
            rangeselector=dict(
                buttons=list(
                    [
                        dict(count=1, label="1M", step="month", stepmode="backward"),
                        dict(count=6, label="6M", step="month", stepmode="backward"),
                        dict(count=1, label="1Y", step="year", stepmode="backward"),
                        dict(count=1, label="YTD", step="year", stepmode="todate"),
                        dict(step="all"),
                    ]
                ),
            ),
        )

    fig.update_layout(
        # one of ( "zoom" | "pan" | "select" | "lasso" | "drawclosedpath"
        # "drawopenpath" | "drawline" | "drawrect" | "drawcircle" | "orbit"
        # "turntable" | False )
        dragmode="pan",
        legend=dict(
            orientation="h",
            yanchor="bottom",
            y=-0.5,
            xanchor="left",
            x=0,
        ),
        xaxis_rangeselector_font_color="rgb(49, 51, 63)",
    )

    # Hide y-axis title. It is almost always 'value' which is not useful
    for axis in fig.layout:
        if type(fig.layout[axis]) == go.layout.YAxis:
            fig.layout[axis].title.text = ""

    if log_y:
        fig.update_layout(yaxis_type="log")

    config = {
        "displayModeBar": False,
        "scrollZoom": False,
    }

    st.plotly_chart(fig, use_container_width=True, config=config, **kwargs)
